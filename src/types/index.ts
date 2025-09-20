export interface User {
  id: string;
  name: string;
  role: "Doctor" | "Patient" | "Admin";
}

export interface Activity {
  id: string;
  title: string;
  timestamp: string;
  type: "upload" | "analysis" | "alert";
}

export interface Alert {
  id: string;
  message: string;
  severity: "critical" | "warning";
}
