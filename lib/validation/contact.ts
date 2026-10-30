export interface ContactInput {
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  serviceInterest: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  sanitizedData?: ContactInput;
}

export function sanitizeString(val?: unknown): string {
  if (typeof val !== "string") return "";
  return val
    .replace(/<[^>]*>/g, "")
    .replace(/[&<>"'/]/g, (match) => {
      switch (match) {
        case "&":
          return "&amp;";
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case '"':
          return "&quot;";
        case "'":
          return "&#x27;";
        case "/":
          return "&#x2F;";
        default:
          return match;
      }
    })
    .trim();
}

export function validateContactInput(payload: unknown): ValidationResult {
  const errors: Record<string, string> = {};

  if (!payload || typeof payload !== "object") {
    return {
      isValid: false,
      errors: { form: "Invalid request payload format." },
    };
  }

  const raw = payload as Record<string, unknown>;

  const fullName = sanitizeString(raw.fullName);
  const email = typeof raw.email === "string" ? raw.email.trim().toLowerCase() : "";
  const phone = sanitizeString(raw.phone);
  const companyName = raw.companyName ? sanitizeString(raw.companyName) : undefined;
  const serviceInterest = sanitizeString(raw.serviceInterest);
  const message = sanitizeString(raw.message);

  if (!fullName) {
    errors.fullName = "Full name is required.";
  } else if (fullName.length < 2) {
    errors.fullName = "Full name must be at least 2 characters long.";
  } else if (fullName.length > 80) {
    errors.fullName = "Full name cannot exceed 80 characters.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!email) {
    errors.email = "Work email address is required.";
  } else if (!emailRegex.test(email)) {
    errors.email = "Please provide a valid corporate or work email address.";
  } else if (email.length > 120) {
    errors.email = "Email address cannot exceed 120 characters.";
  }

  const digitsOnly = phone.replace(/[^0-9+]/g, "");
  if (!phone) {
    errors.phone = "Contact phone number is required.";
  } else if (digitsOnly.length < 8 || digitsOnly.length > 16) {
    errors.phone = "Phone number must be between 8 and 16 digits.";
  }

  if (companyName && companyName.length > 100) {
    errors.companyName = "Company name cannot exceed 100 characters.";
  }

  if (!serviceInterest) {
    errors.serviceInterest = "Please select a service or practice area of interest.";
  } else if (serviceInterest.length > 120) {
    errors.serviceInterest = "Service title exceeds maximum allowed length.";
  }

  if (!message) {
    errors.message = "Project specifications or inquiry message is required.";
  } else if (message.length < 15) {
    errors.message = "Message must be at least 15 characters to explain your requirements.";
  } else if (message.length > 3000) {
    errors.message = "Message cannot exceed 3,000 characters.";
  }

  const isValid = Object.keys(errors).length === 0;

  return {
    isValid,
    errors,
    sanitizedData: isValid
      ? {
          fullName,
          email,
          phone,
          companyName,
          serviceInterest,
          message,
        }
      : undefined,
  };
}

