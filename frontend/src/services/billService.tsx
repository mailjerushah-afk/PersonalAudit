import type { Bill } from "../types/Bill";

const STORAGE_KEY = "bills";

export const getBills = (): Bill[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveBills = (bills: Bill[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bills));
};