// @RestController
// @RequestMapping("/api/portfolio")
// @CrossOrigin(origins = "*") // or your frontend URL
// public class PortfolioController {

//     private final PortfolioService portfolioService;

//     public PortfolioController(PortfolioService portfolioService) {
//         this.portfolioService = portfolioService;
//     }

//     @PostMapping("/{userId}")
//     public ResponseEntity<?> addAsset(
//             @PathVariable Long userId,
//             @RequestBody PortfolioRequest request
//     ) {
//         portfolioService.addAsset(userId, request);
//         return ResponseEntity.ok().build();
//     }

//     @GetMapping("/{userId}")
//     public List<PortfolioItem> getPortfolio(@PathVariable Long userId) {
//         return portfolioService.getPortfolio(userId);
//     }
// }