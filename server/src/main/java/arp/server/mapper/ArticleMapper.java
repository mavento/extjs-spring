package arp.server.mapper;

import arp.server.dto.ArticleDTO;
import arp.server.model.Article;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.ReportingPolicy;


@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ArticleMapper {

    public ArticleDTO toDTO(Article Article);

    public Article toEntity(ArticleDTO Article);

    public void mapToEntity(ArticleDTO ArticleDTO, @MappingTarget Article Article);

}
