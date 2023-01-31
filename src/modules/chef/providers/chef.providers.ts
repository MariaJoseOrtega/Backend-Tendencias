import { DataSource } from 'typeorm';



// import { RequirementRequestEntity } from '../entities/requirement-request.entity';
import { CategoryEntity } from 'src/modules/category/entities/category.entity';
import { RepositoryEnum } from 'src/shared/enums';
import { ComidaEntity } from 'src/modules/comida/entities/comida.entity';
import { ChefEntity } from '../entities/chef.entity';

export const chefProviders = [
  {
    provide: RepositoryEnum.COMIDA_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ComidaEntity),
    // inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
  {
    provide: RepositoryEnum.CHEF_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ChefEntity),
    // inject: [DataSourceEnum.PG_DATA_SOURCE],
  },

]