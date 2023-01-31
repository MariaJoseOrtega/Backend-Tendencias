import { DataSource } from 'typeorm';


// import { DataSourceEnum, RepositoryEnum } from '@shared/enums';
// import { RequirementRequestEntity } from '../entities/requirement-request.entity';

import { ProductEntity } from '../../sales/entities';
import { RepositoryEnum } from 'src/shared/enums';
import { ComidanEntity } from '../entities/comida.entity';
import { ChefEntity } from 'src/modules/chef/entities/chef.entity';

export const comidaProviders = [
  {
    provide: RepositoryEnum.COMIDA_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ComidaEntity),
    // inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
  {
    provide: RepositoryEnum.COMIDA_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ComidaEntity),
    // inject: [DataSourceEnum.PG_DATA_SOURCE],
  },

]