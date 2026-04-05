package com.example.demo.controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import com.example.demo.model.PortfolioItem;
import com.example.demo.repository.PortfolioRepository;
import com.example.demo.dto.PortfolioRequest;
import com.example.demo.service.PortfolioService;

import java.util.List;
@RestController
@RequestMapping("/api/portfolio")
@CrossOrigin(origins = "*")
public class PortfolioController {

    private final PortfolioService portfolioService;

    public PortfolioController(PortfolioService portfolioService) {
        this.portfolioService = portfolioService;
    }

    @PostMapping("/{userId}")
    public ResponseEntity<?> addAsset(
            @PathVariable Long userId,
            @RequestBody PortfolioRequest request
    ) {
        portfolioService.addAsset(userId, request);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{userId}")
    public List<PortfolioItem> getPortfolio(@PathVariable Long userId) {
        return portfolioService.getPortfolio(userId);
    }
}