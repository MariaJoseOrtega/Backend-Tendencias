import { Global, Module } from "@nestjs/common";
import { chefProviders } from "./providers/chef.providers";

// import {DatabaseModule} from "@database";

@Global()
@Module(
    {
        // imports: [DatabaseModule],
        controllers:[],
        providers:[
            ...chefProviders
        ],
    })

    export class ChefModule{

    }