package arp.server.service;

import arp.server.dto.ArticleDTO;
import arp.server.mapper.ArticleMapper;
import arp.server.model.Article;
import arp.server.repository.ArticleRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Assert;


@Service
@Transactional
public class ArticleService {

    final static Logger LOG = LoggerFactory.getLogger(ArticleService.class);

    @Autowired
    ArticleRepository articleRepository;

    @Autowired
    ArticleMapper articleMapper;

    public Page<ArticleDTO> findArticles(Pageable pageable) {
        return articleRepository.findAll(pageable).map(article -> articleMapper.toDTO(article));
    }

    public ArticleDTO getArticle(Long id) {
        Article article = articleRepository.getOne(id);
        return (article == null) ? null : articleMapper.toDTO(article);
    }

    public void updateArticle(ArticleDTO articleDTO) {
        Article article = articleRepository.findOne(articleDTO.getId());
        Assert.notNull(article, "No Article found for:  " + articleDTO.getId());
        articleMapper.mapToEntity(articleDTO, article);
    }

    public ArticleDTO saveArticle(ArticleDTO articleDTO) {
        Article article = articleMapper.toEntity(articleDTO);
        articleRepository.save(article);
        return articleMapper.toDTO(article);
    }

    public void deleteArticle(Long id) {
        articleRepository.delete(id);
    }
}
