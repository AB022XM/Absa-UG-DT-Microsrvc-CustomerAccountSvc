package ug.co.absa.microsrvc.customeraccountsvc.repository.search;

import static org.elasticsearch.index.query.QueryBuilders.queryStringQuery;

import java.util.stream.Stream;
import org.springframework.data.elasticsearch.core.ElasticsearchRestTemplate;
import org.springframework.data.elasticsearch.core.SearchHit;
import org.springframework.data.elasticsearch.core.query.NativeSearchQuery;
import org.springframework.data.elasticsearch.core.query.Query;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import ug.co.absa.microsrvc.customeraccountsvc.domain.entity.AbsaCustomer;
import ug.co.absa.microsrvc.customeraccountsvc.repository.AbsaCustomerRepository;

/**
 * Spring AmolCustomerInfoResponse Elasticsearch repository for the {@link AbsaCustomer} entity.
 */
public interface AbsaCustomerSearchRepository extends ElasticsearchRepository<AbsaCustomer, Long>, AbsaCustomerSearchRepositoryInternal {}

interface AbsaCustomerSearchRepositoryInternal {
    Stream<AbsaCustomer> search(String query);

    Stream<AbsaCustomer> search(Query query);

    void index(AbsaCustomer entity);
}

class AbsaCustomerSearchRepositoryInternalImpl implements AbsaCustomerSearchRepositoryInternal {

    private final ElasticsearchRestTemplate elasticsearchTemplate;
    private final AbsaCustomerRepository repository;

    AbsaCustomerSearchRepositoryInternalImpl(ElasticsearchRestTemplate elasticsearchTemplate, AbsaCustomerRepository repository) {
        this.elasticsearchTemplate = elasticsearchTemplate;
        this.repository = repository;
    }

    @Override
    public Stream<AbsaCustomer> search(String query) {
        NativeSearchQuery nativeSearchQuery = new NativeSearchQuery(queryStringQuery(query));
        return search(nativeSearchQuery);
    }

    @Override
    public Stream<AbsaCustomer> search(Query query) {
        return elasticsearchTemplate.search(query, AbsaCustomer.class).map(SearchHit::getContent).stream();
    }

    @Override
    public void index(AbsaCustomer entity) {
        repository.findById(entity.getId()).ifPresent(elasticsearchTemplate::save);
    }
}
