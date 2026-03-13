package com.example.demo.controller;

import com.example.demo.model.Budget;
import com.example.demo.repository.BudgetRepository;
import com.example.demo.repository.TransactionRepository;
import com.example.demo.dto.BudgetStatus;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/budgets")
public class BudgetController {

    private final BudgetRepository budgetRepository;
    private final TransactionRepository transactionRepository;

    public BudgetController(BudgetRepository budgetRepository,
                            TransactionRepository transactionRepository) {
        this.budgetRepository = budgetRepository;
        this.transactionRepository = transactionRepository;
    }

    @PostMapping
    public Budget createBudget(@RequestBody Budget budget) {
        return budgetRepository.save(budget);
    }

    @PutMapping("/{budgetId}")
    public Budget updateBudget(@PathVariable Long budgetId, @RequestBody Budget updatedBudget) {

        Budget budget = budgetRepository.findById(budgetId)
                .orElseThrow(() -> new RuntimeException("Budget not found"));

        budget.setCategory(updatedBudget.getCategory());
        budget.setMonthlyLimit(updatedBudget.getMonthlyLimit());

        return budgetRepository.save(budget);
    }

    @GetMapping("/{userId}/status")
    public List<BudgetStatus> getBudgetStatus(@PathVariable Long userId) {

        return budgetRepository.findByUserId(userId)
                .stream()
                .map(budget -> {

                    double spent = transactionRepository
                            .findByUser_Id(userId)
                            .stream()
                            .filter(t -> budget.getCategory().equals(t.getCategory()))
                            .mapToDouble(t -> t.getAmount().doubleValue())
                            .sum();

                    BudgetStatus status = new BudgetStatus();
                    status.category = budget.getCategory();
                    status.limit = budget.getMonthlyLimit();
                    status.spent = spent;
                    status.percentage = (spent / budget.getMonthlyLimit()) * 100;

                    return status;

                })
                .collect(Collectors.toList());
    }
    @DeleteMapping("/{budgetId}")
    public void deleteBudget(@PathVariable Long budgetId) {
        budgetRepository.deleteById(budgetId);
    }
}