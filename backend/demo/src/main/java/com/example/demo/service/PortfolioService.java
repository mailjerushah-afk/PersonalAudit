package com.example.demo.service;
import org.springframework.stereotype.Service;
import com.example.demo.repository.PortfolioRepository;
import com.example.demo.dto.PortfolioRequest;
import com.example.demo.model.PortfolioItem;
import java.util.List;

@Service
public class PortfolioService {

    private final PortfolioRepository repository;

    public PortfolioService(PortfolioRepository repository) {
        this.repository = repository;
    }

    public void addAsset(Long userId, PortfolioRequest request) {
        PortfolioItem item = new PortfolioItem();
        item.setUserId(userId);
        item.setAsset(request.getAsset());
        item.setQuantity(request.getQuantity());
        item.setValue(request.getValue());

        repository.save(item);
    }

    public List<PortfolioItem> getPortfolio(Long userId) {
        return repository.findByUserId(userId);
    }
}