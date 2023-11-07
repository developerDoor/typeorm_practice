import {
    ChildEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    TableInheritance,
    UpdateDateColumn
} from "typeorm";

export class BaseModel {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}

@Entity()
export class BookModel extends BaseModel {
    @Column()
    name: string
}

@Entity()
export class CarModel extends BaseModel {
    @Column()
    brand: string;
}


// Single talbe inheritance에서는 @Entity를 기입해준다
// 잘 사용하지 않는다.
// SingleBaseModel을 상속받은 서로 다른 두 모델이 한 테이블에서 관리된다.
@Entity()
@TableInheritance({
    column: {
        name: 'type',
        type: 'varchar',
    }
})
export class SingleBaseModel {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

@ChildEntity()
export class ComputerModel extends SingleBaseModel {
    @Column()
    brand: string;
}

@ChildEntity()
export class AirplaneModel extends SingleBaseModel {
    @Column()
    country: string;
}
