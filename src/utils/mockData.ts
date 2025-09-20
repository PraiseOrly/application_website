import { User, Activity, Alert } from "../types";

export const mockUser: User = {
  id: "1",
  name: "Dr. John Doe",
  role: "Doctor",
};

export const mockActivities: Activity[] = [
  { id: "1", title: "ECG Uploaded", timestamp: "2025-04-09 10:00", type: "upload" },
  { id: "2", title: "Analysis Completed", timestamp: "2025-04-09 10:05", type: "analysis" },
];

export const mockAlerts: Alert[] = [
  { id: "1", message: "Critical Arrhythmia Detected", severity: "critical" },
];
