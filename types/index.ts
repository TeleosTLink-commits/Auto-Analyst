// Database Types

export type ServiceType = 'repair-audit' | 'pre-diagnosis' | 'bike-purchase';

export type CaseStatus = 'pending' | 'in-review' | 'completed' | 'cancelled';

export type ShopRating = 'trusted' | 'verified' | 'caution' | 'avoid';

// Customer Information
export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
  totalCases: number;
}

// Case Base Interface
export interface CaseBase {
  id: string;
  caseNumber: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  serviceType: ServiceType;
  status: CaseStatus;
  createdAt: Date;
  updatedAt: Date;
  paymentStatus: 'pending' | 'paid' | 'refunded';
  paymentAmount: number;
  shopName?: string;
  shopLocation?: string;
  auditReportUrl?: string;
}

// Repair Audit Case
export interface RepairAuditCase extends CaseBase {
  serviceType: 'repair-audit';
  vehicleInfo: {
    year: string;
    make: string;
    model: string;
    mileage: string;
    vin?: string;
  };
  diagnosticCodes: string[]; // P0420, P0301, etc.
  symptoms: string;
  quoteImages: string[]; // URLs to uploaded images
  estimatedCost: number;
  // Your analysis
  analysis?: {
    codeVsPartCheck: string;
    diagnosticProofCheck: string;
    upsellCheck: string;
    laborPaddingCheck: string;
    overallVerdict: 'approve' | 'reject' | 'investigate';
    recommendation: string;
    questionsToAsk: string[];
  };
}

// Pre-Diagnosis Case
export interface PreDiagnosisCase extends CaseBase {
  serviceType: 'pre-diagnosis';
  vehicleInfo: {
    year: string;
    make: string;
    model: string;
    mileage: string;
    vin?: string;
  };
  symptoms: string;
  diagnosticCodes?: string[];
  videoUrl?: string;
  freezeFrameData?: string;
  obd2ScannerData?: string;
  // Your roadmap
  roadmap?: {
    suspectedIssue: string;
    testingSteps: string[];
    diagnosticNote: string; // The note they hand to mechanic
    estimatedCost: {
      low: number;
      high: number;
    };
  };
}

// Used Bike Pre-Purchase Case
export interface BikePurchaseCase extends CaseBase {
  serviceType: 'bike-purchase';
  bikeInfo: {
    year: string;
    make: string;
    model: string;
    type: 'dirt-bike' | 'atv' | 'utv' | 'street-bike';
    askingPrice: number;
    mileage?: string;
    hours?: string;
  };
  sellerDescription: string;
  videoUrls: string[];
  images: string[];
  // Your inspection report
  inspection?: {
    redFlags: string[];
    questionsToAsk: string[];
    thingsToCheck: string[];
    estimatedRepairCosts?: number;
    verdict: 'buy' | 'negotiate' | 'walk-away';
    recommendation: string;
  };
}

export type Case = RepairAuditCase | PreDiagnosisCase | BikePurchaseCase;

// Shop Reputation Tracking
export interface Shop {
  id: string;
  name: string;
  location: string;
  address?: string;
  phone?: string;
  rating: ShopRating;
  auditHistory: {
    totalAudits: number;
    approvedQuotes: number;
    rejectedQuotes: number;
    upsellAttempts: number;
  };
  notes: string;
  lastAuditDate: Date;
  createdAt: Date;
}

// Audit Report
export interface AuditReport {
  id: string;
  caseId: string;
  caseNumber: string;
  generatedAt: Date;
  customerName: string;
  serviceType: ServiceType;
  pdfUrl: string;
  sections: {
    claim: any;
    technicalReview: any;
    recommendation: any;
  };
}

// Form Submission Types
export interface RepairAuditSubmission {
  serviceType: 'repair-audit';
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  vehicleYear: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleMileage: string;
  vehicleVin?: string;
  diagnosticCodes: string;
  symptoms: string;
  shopName?: string;
  shopLocation?: string;
  estimatedCost: string;
  quoteFiles: File[];
}

export interface PreDiagnosisSubmission {
  serviceType: 'pre-diagnosis';
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  vehicleYear: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleMileage: string;
  symptoms: string;
  diagnosticCodes?: string;
  videoFile?: File;
  freezeFrameData?: string;
  obd2Data?: string;
}

export interface BikePurchaseSubmission {
  serviceType: 'bike-purchase';
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  bikeYear: string;
  bikeMake: string;
  bikeModel: string;
  bikeType: 'dirt-bike' | 'atv' | 'utv' | 'street-bike';
  askingPrice: string;
  mileageOrHours: string;
  sellerDescription: string;
  videoFiles: File[];
  imageFiles: File[];
}

export type FormSubmission = RepairAuditSubmission | PreDiagnosisSubmission | BikePurchaseSubmission;
