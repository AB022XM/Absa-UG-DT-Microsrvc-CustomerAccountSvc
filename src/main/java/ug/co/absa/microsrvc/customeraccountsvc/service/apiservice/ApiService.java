package ug.co.absa.microsrvc.customeraccountsvc.service.apiservice;

import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

class ApiService {

    private Api api;

    ApiService() {
        String BASE_URL = "(https://domain-api-uat.nprd-amol.intra.absa.co.za:443/v2/";
        Retrofit retrofit = new Retrofit.Builder()
            .baseUrl("BASE_URL")
            .addConverterFactory(GsonConverterFactory.create())
            .addCallAdapterFactory(RxJavaCallAdapterFactory.create())
            .build();

        api = retrofit.create(Api.class);
    }

    Observable<String> getTopContributors(String userName) {
        return gitHubApi.listRepos(userName)
            .flatMapIterable(x -> x)
            .flatMap(repo -> gitHubApi.listRepoContributors(userName, repo.getName()))
            .flatMapIterable(x -> x)
            .filter(c -> c.getContributions() > 100)
            .sorted((a, b) -> b.getContributions() - a.getContributions())
            .map(Contributor::getName)
            .distinct();
    }
}
