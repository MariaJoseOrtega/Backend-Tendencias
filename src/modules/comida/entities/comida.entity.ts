import { ComidaEntity } from "src/modules/comida/entities/comida.entity";
import { ProductEntity } from "src/modules/sales/entities";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { OneToMany } from "typeorm/decorator/relations/OneToMany";

export class ComidaEntity{

    @PrimaryGeneratedColumn('uuid')
    id:number;
    
    @CreateDateColumn({
        name:'created_date',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    createdAt: Date;
    @UpdateDateColumn({
        name:'updated_date',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP', 
    })
    updatedAt: Date;
    @DeleteDateColumn({
        name:'deleted_date',
        type:'timestamptz',
        nullable : true,
    })
    deletedAt:Date;
    
    //Relationship    
    // @ManyToOne(() => CategoryEntity, (cateogry) => category.products)
    // category: CategoryEntity;
    
    @Column('varchar', {
    name:'name',
    unique:true,
    comment: 'Menu del almuerzo,
    })
    name:string;

    @Column('date', {
        name:'ingredientes',
        unique:true,
        comment: 'Ingredientes de la comida',
        })
        fechaCreacion:string;
    
    //Relationship   
     // Relaciones de uno a muchos
     @ManyToOne(() => ChefEntity, (comida) => comida.comidas)
     comida: ComidaEntity;

    // Relaciones de muchos a uno
    // @ManyToOne(() => CategoryEntity, (cateogry) => category.products)
    // category: CategoryEntity;
    
    /*@Column('boolean',{
    name:'state',
    })
    state:boolean;
    @Column('enum', {
    name:'language',
    enum:languageTypeEnum,
    })
    language:LanguageTypeEnum;*/
    
    //completar
    
    @BeforeInsert()
    @BeforeUpdate()
    async setName(){
    if(!this.name){
        return;
    }
    this.name = this.name.toUpperCase();
    }
    /*setEmail(){
    if(!this.email){
    return;
    }
    this.email = this.email.toLowerCase().trim();
    
    async hashPassword(){
    if(!this.password){
        return;
    }
    this.password = await Bcrypt.hash(this.password, 12);
    }*/
    
    }