package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;
import com.example.demo.model.Transaction;
import com.example.demo.repository.TransactionRepository; 

@RestController
@RequestMapping("/api/transactions")
public class TransactionController {

    private final TransactionRepository transactionRepository;

    public TransactionController(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    @GetMapping("/{userId}/balance")
    public Double getBalance(@PathVariable Long userId) {
        return transactionRepository.findByUserId(userId)
                .stream()
                .mapToDouble(Transaction::getAmount)
                .sum();
    }
}