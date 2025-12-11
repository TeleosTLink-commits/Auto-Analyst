import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import type { RepairAuditCase, PreDiagnosisCase, BikePurchaseCase } from '@/types';
import { formatCurrency, formatDate } from './utils';

export function generateRepairAuditReport(caseData: RepairAuditCase): Blob {
  const doc = new jsPDF();
  let yPosition = 20;

  // Header
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('AUTO AUDITOR', 105, yPosition, { align: 'center' });
  
  yPosition += 10;
  doc.setFontSize(18);
  doc.text('Repair Audit Report', 105, yPosition, { align: 'center' });

  yPosition += 15;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(`Case #: ${caseData.caseNumber}`, 20, yPosition);
  doc.text(`Date: ${formatDate(caseData.createdAt)}`, 150, yPosition);

  yPosition += 15;

  // Section 1: The Claim
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('SECTION 1: THE CLAIM', 20, yPosition);
  
  yPosition += 10;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');

  const claimData = [
    ['Customer', caseData.customerName],
    ['Vehicle', `${caseData.vehicleInfo.year} ${caseData.vehicleInfo.make} ${caseData.vehicleInfo.model}`],
    ['Mileage', caseData.vehicleInfo.mileage],
    ['Diagnostic Codes', caseData.diagnosticCodes.join(', ')],
    ['Customer Complaint', caseData.symptoms],
    ['Shop Name', caseData.shopName || 'Not provided'],
    ['Shop Location', caseData.shopLocation || 'Not provided'],
    ['Estimated Cost', formatCurrency(caseData.estimatedCost)],
  ];

  autoTable(doc, {
    startY: yPosition,
    head: [],
    body: claimData,
    theme: 'striped',
    styles: { fontSize: 10 },
    columnStyles: {
      0: { fontStyle: 'bold', cellWidth: 50 },
      1: { cellWidth: 120 },
    },
  });

  yPosition = (doc as any).lastAutoTable.finalY + 15;

  // Section 2: Technical Review
  if (caseData.analysis) {
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('SECTION 2: TECHNICAL REVIEW', 20, yPosition);
    
    yPosition += 10;

    // Code vs Part Check
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('Filter 1: Code vs. Part Logic Check', 20, yPosition);
    yPosition += 7;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const codeVsPartLines = doc.splitTextToSize(caseData.analysis.codeVsPartCheck, 170);
    doc.text(codeVsPartLines, 20, yPosition);
    yPosition += codeVsPartLines.length * 5 + 5;

    // Diagnostic Proof Check
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('Filter 2: Diagnostic Proof Check', 20, yPosition);
    yPosition += 7;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const proofLines = doc.splitTextToSize(caseData.analysis.diagnosticProofCheck, 170);
    doc.text(proofLines, 20, yPosition);
    yPosition += proofLines.length * 5 + 5;

    // Check for new page
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 20;
    }

    // Upsell Check
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('Filter 3: Shotgun Upsell Check', 20, yPosition);
    yPosition += 7;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const upsellLines = doc.splitTextToSize(caseData.analysis.upsellCheck, 170);
    doc.text(upsellLines, 20, yPosition);
    yPosition += upsellLines.length * 5 + 5;

    // Labor Padding Check
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('Filter 4: Labor & Part Padding', 20, yPosition);
    yPosition += 7;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const laborLines = doc.splitTextToSize(caseData.analysis.laborPaddingCheck, 170);
    doc.text(laborLines, 20, yPosition);
    yPosition += laborLines.length * 5 + 10;

    // Section 3: Recommendation
    if (yPosition > 220) {
      doc.addPage();
      yPosition = 20;
    }

    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('SECTION 3: RECOMMENDATION', 20, yPosition);
    
    yPosition += 10;

    // Verdict
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    const verdictColor = caseData.analysis.overallVerdict === 'approve' ? [34, 197, 94] : 
                         caseData.analysis.overallVerdict === 'reject' ? [239, 68, 68] : 
                         [251, 191, 36];
    doc.setTextColor(verdictColor[0], verdictColor[1], verdictColor[2]);
    doc.text(`VERDICT: ${caseData.analysis.overallVerdict.toUpperCase()}`, 20, yPosition);
    doc.setTextColor(0, 0, 0);
    
    yPosition += 10;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const recLines = doc.splitTextToSize(caseData.analysis.recommendation, 170);
    doc.text(recLines, 20, yPosition);
    yPosition += recLines.length * 5 + 10;

    // Questions to Ask
    if (caseData.analysis.questionsToAsk && caseData.analysis.questionsToAsk.length > 0) {
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text('Questions to Ask the Shop:', 20, yPosition);
      yPosition += 7;

      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      caseData.analysis.questionsToAsk.forEach((question, index) => {
        const questionLines = doc.splitTextToSize(`${index + 1}. ${question}`, 165);
        doc.text(questionLines, 25, yPosition);
        yPosition += questionLines.length * 5 + 3;
      });
    }
  }

  // Footer
  doc.setFontSize(8);
  doc.setTextColor(128, 128, 128);
  doc.text('Auto Auditor - Professional Vehicle Repair Analysis', 105, 285, { align: 'center' });

  return doc.output('blob');
}

export function generatePreDiagnosisReport(caseData: PreDiagnosisCase): Blob {
  const doc = new jsPDF();
  let yPosition = 20;

  // Header
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('AUTO AUDITOR', 105, yPosition, { align: 'center' });
  
  yPosition += 10;
  doc.setFontSize(18);
  doc.text('Pre-Diagnosis Roadmap', 105, yPosition, { align: 'center' });

  yPosition += 15;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(`Case #: ${caseData.caseNumber}`, 20, yPosition);
  doc.text(`Date: ${formatDate(caseData.createdAt)}`, 150, yPosition);

  yPosition += 15;

  // Vehicle & Customer Info
  const infoData = [
    ['Customer', caseData.customerName],
    ['Vehicle', `${caseData.vehicleInfo.year} ${caseData.vehicleInfo.make} ${caseData.vehicleInfo.model}`],
    ['Mileage', caseData.vehicleInfo.mileage],
    ['Symptoms', caseData.symptoms],
  ];

  if (caseData.diagnosticCodes && caseData.diagnosticCodes.length > 0) {
    infoData.push(['Diagnostic Codes', caseData.diagnosticCodes.join(', ')]);
  }

  autoTable(doc, {
    startY: yPosition,
    head: [],
    body: infoData,
    theme: 'striped',
    styles: { fontSize: 10 },
    columnStyles: {
      0: { fontStyle: 'bold', cellWidth: 50 },
      1: { cellWidth: 120 },
    },
  });

  yPosition = (doc as any).lastAutoTable.finalY + 15;

  if (caseData.roadmap) {
    // Suspected Issue
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('SUSPECTED ISSUE', 20, yPosition);
    
    yPosition += 10;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const issueLines = doc.splitTextToSize(caseData.roadmap.suspectedIssue, 170);
    doc.text(issueLines, 20, yPosition);
    yPosition += issueLines.length * 5 + 10;

    // Testing Steps
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('DIAGNOSTIC STEPS', 20, yPosition);
    
    yPosition += 10;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    
    caseData.roadmap.testingSteps.forEach((step, index) => {
      const stepLines = doc.splitTextToSize(`Step ${index + 1}: ${step}`, 165);
      doc.text(stepLines, 25, yPosition);
      yPosition += stepLines.length * 5 + 5;

      if (yPosition > 250) {
        doc.addPage();
        yPosition = 20;
      }
    });

    yPosition += 5;

    // Note for Mechanic
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('NOTE FOR YOUR MECHANIC', 20, yPosition);
    
    yPosition += 10;
    doc.setFillColor(240, 240, 240);
    doc.rect(20, yPosition - 5, 170, (doc.splitTextToSize(caseData.roadmap.diagnosticNote, 165).length * 5) + 10, 'F');
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'italic');
    const noteLines = doc.splitTextToSize(caseData.roadmap.diagnosticNote, 165);
    doc.text(noteLines, 25, yPosition);
    yPosition += noteLines.length * 5 + 15;

    // Estimated Cost
    if (yPosition > 240) {
      doc.addPage();
      yPosition = 20;
    }

    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('ESTIMATED REPAIR COST', 20, yPosition);
    
    yPosition += 10;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`Low Estimate: ${formatCurrency(caseData.roadmap.estimatedCost.low)}`, 20, yPosition);
    yPosition += 6;
    doc.text(`High Estimate: ${formatCurrency(caseData.roadmap.estimatedCost.high)}`, 20, yPosition);
  }

  // Footer
  doc.setFontSize(8);
  doc.setTextColor(128, 128, 128);
  doc.text('Auto Auditor - Professional Vehicle Repair Analysis', 105, 285, { align: 'center' });

  return doc.output('blob');
}

export function generateBikePurchaseReport(caseData: BikePurchaseCase): Blob {
  const doc = new jsPDF();
  let yPosition = 20;

  // Header
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('AUTO AUDITOR', 105, yPosition, { align: 'center' });
  
  yPosition += 10;
  doc.setFontSize(18);
  doc.text('Pre-Purchase Inspection Report', 105, yPosition, { align: 'center' });

  yPosition += 15;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(`Case #: ${caseData.caseNumber}`, 20, yPosition);
  doc.text(`Date: ${formatDate(caseData.createdAt)}`, 150, yPosition);

  yPosition += 15;

  // Bike Info
  const bikeData = [
    ['Customer', caseData.customerName],
    ['Bike', `${caseData.bikeInfo.year} ${caseData.bikeInfo.make} ${caseData.bikeInfo.model}`],
    ['Type', caseData.bikeInfo.type],
    ['Hours/Mileage', caseData.bikeInfo.mileage || caseData.bikeInfo.hours || 'Not specified'],
    ['Asking Price', formatCurrency(caseData.bikeInfo.askingPrice)],
  ];

  autoTable(doc, {
    startY: yPosition,
    head: [],
    body: bikeData,
    theme: 'striped',
    styles: { fontSize: 10 },
    columnStyles: {
      0: { fontStyle: 'bold', cellWidth: 50 },
      1: { cellWidth: 120 },
    },
  });

  yPosition = (doc as any).lastAutoTable.finalY + 15;

  if (caseData.inspection) {
    // Verdict
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    const verdictColor = caseData.inspection.verdict === 'buy' ? [34, 197, 94] : 
                         caseData.inspection.verdict === 'walk-away' ? [239, 68, 68] : 
                         [251, 191, 36];
    doc.setTextColor(verdictColor[0], verdictColor[1], verdictColor[2]);
    doc.text(`VERDICT: ${caseData.inspection.verdict.toUpperCase().replace('-', ' ')}`, 20, yPosition);
    doc.setTextColor(0, 0, 0);
    
    yPosition += 12;

    // Red Flags
    if (caseData.inspection.redFlags.length > 0) {
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(239, 68, 68);
      doc.text('⚠ RED FLAGS', 20, yPosition);
      doc.setTextColor(0, 0, 0);
      
      yPosition += 8;
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');

      caseData.inspection.redFlags.forEach((flag, index) => {
        const flagLines = doc.splitTextToSize(`• ${flag}`, 165);
        doc.text(flagLines, 25, yPosition);
        yPosition += flagLines.length * 5 + 3;
      });

      yPosition += 5;
    }

    // Questions to Ask
    if (caseData.inspection.questionsToAsk.length > 0) {
      if (yPosition > 200) {
        doc.addPage();
        yPosition = 20;
      }

      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('QUESTIONS TO ASK THE SELLER', 20, yPosition);
      
      yPosition += 8;
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');

      caseData.inspection.questionsToAsk.forEach((question, index) => {
        const questionLines = doc.splitTextToSize(`${index + 1}. ${question}`, 165);
        doc.text(questionLines, 25, yPosition);
        yPosition += questionLines.length * 5 + 3;
      });

      yPosition += 5;
    }

    // Things to Check
    if (caseData.inspection.thingsToCheck.length > 0) {
      if (yPosition > 200) {
        doc.addPage();
        yPosition = 20;
      }

      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('THINGS TO PHYSICALLY CHECK', 20, yPosition);
      
      yPosition += 8;
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');

      caseData.inspection.thingsToCheck.forEach((item, index) => {
        const itemLines = doc.splitTextToSize(`☐ ${item}`, 165);
        doc.text(itemLines, 25, yPosition);
        yPosition += itemLines.length * 5 + 3;
      });

      yPosition += 5;
    }

    // Recommendation
    if (yPosition > 220) {
      doc.addPage();
      yPosition = 20;
    }

    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('FINAL RECOMMENDATION', 20, yPosition);
    
    yPosition += 8;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const recLines = doc.splitTextToSize(caseData.inspection.recommendation, 170);
    doc.text(recLines, 20, yPosition);
    yPosition += recLines.length * 5 + 10;

    // Estimated Repair Costs
    if (caseData.inspection.estimatedRepairCosts) {
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text(`Estimated Additional Repairs: ${formatCurrency(caseData.inspection.estimatedRepairCosts)}`, 20, yPosition);
    }
  }

  // Footer
  doc.setFontSize(8);
  doc.setTextColor(128, 128, 128);
  doc.text('Auto Auditor - Professional Vehicle Repair Analysis', 105, 285, { align: 'center' });

  return doc.output('blob');
}
