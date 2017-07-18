package arp.server.web;

import arp.server.aspect.GridPage;
import arp.server.aspect.GridRequest;
import arp.server.dto.ArticleDTO;
import arp.server.service.ArticleService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(value = "/api/article")
public class ArticleController {

    final static Logger LOG = LoggerFactory.getLogger(ArticleController.class);

    @Autowired
    ArticleService articleService;

    @GridRequest
    @RequestMapping(value = "", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<GridPage<ArticleDTO>> findAllArticle(Pageable pageable) {
        Page<ArticleDTO> page = articleService.findArticles(pageable);
        return new ResponseEntity<>(new GridPage(true, page.getTotalElements(), page.getContent()), HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ArticleDTO> getArticle(@PathVariable Long id) {
        ArticleDTO article = articleService.getArticle(id);
        return new ResponseEntity<>(article, HttpStatus.OK);
    }

    @RequestMapping(value = "", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ArticleDTO> createArticle(@RequestBody ArticleDTO articleDTO) {
        ArticleDTO article = articleService.saveArticle(articleDTO);
        return new ResponseEntity<>(article, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
    public void updateArticle(@RequestBody ArticleDTO articleDTO) {
        articleService.updateArticle(articleDTO);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    public void deleteArticle(@PathVariable Long id) {
        articleService.deleteArticle(id);
    }

}


