import { Global, Module } from "@nestjs/common";
import { comidaProviders } from "./providers/comida.providers";
// import {DatabaseModule} from "@database";

@Global()
@Module(
    {
        // imports: [DatabaseModule],
        controllers:[],
        providers:[
            ...comidaProviders
        ],
    })

    export class ComidaModule{

    }