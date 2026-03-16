export type Transaction = {
  id: number;
  amount: number;
  description: string;
  timestamp: string;
  category?: string;
};

export type BudgetStatus = {
  category: string;
  limit: number;
  spent: number;
  percentage: number;
};

export type Budget = {
  id?: number;
  userId: number;
  category: string;
  monthlyLimit: number;
};