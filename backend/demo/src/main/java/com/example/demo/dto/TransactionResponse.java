package com.example.demo.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public record TransactionResponse(
        Long id,
        BigDecimal amount,
        String description,
        LocalDateTime timestamp
) {}