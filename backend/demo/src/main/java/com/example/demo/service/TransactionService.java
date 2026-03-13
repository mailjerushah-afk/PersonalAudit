package com.example.demo.service;

import com.example.demo.dto.TransactionRequest;
import com.example.demo.dto.TransactionResponse;
import com.example.demo.model.Transaction;
import com.example.demo.model.User;
import com.example.demo.repository.TransactionRepository;
import com.example.demo.repository.UserRepository;

import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class TransactionService {

    private final TransactionRepository transactionRepository;
    private final UserRepository userRepository;

    public TransactionService(TransactionRepository transactionRepository,
                              UserRepository userRepository) {
        this.transactionRepository = transactionRepository;
        this.userRepository = userRepository;
    }

    public TransactionResponse createTransaction(TransactionRequest request) {

        User user = userRepository.findById(request.userId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Transaction transaction = new Transaction();
        transaction.setAmount(request.amount());
        transaction.setDescription(request.description());
        transaction.setTimestamp(LocalDateTime.now());
        transaction.setUser(user);
        transaction.setCategory(request.category());

        Transaction saved = transactionRepository.save(transaction);

        return new TransactionResponse(
                saved.getId(),
                saved.getAmount(),
                saved.getDescription(),
                saved.getTimestamp()
        );
    }

    public BigDecimal calculateBalance(Long userId) {

        return transactionRepository.findByUser_Id(userId)
                .stream()
                .map(Transaction::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    public List<TransactionResponse> getUserTransactions(Long userId) {

        return transactionRepository.findByUser_Id(userId)
                .stream()
                .map(t -> new TransactionResponse(
                        t.getId(),
                        t.getAmount(),
                        t.getDescription(),
                        t.getTimestamp()
                ))
                .toList();
    }
}