import {
    Column,
    CreateDateColumn,
    Entity, Generated,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    VersionColumn
} from "typeorm";

@Entity()
export class UserModel {

    // ID
    // 자동으로 ID를 생성한다.

    //@PrimaryGeneratedColumn()
    // Primary 컬럼은 모든 테이블에서 기본적으로 존재해야한다.
    // 테이블 안에서 각각의 Row를 구분할 수 있는 컬럼이다.
    // @PrimaryColumn() // DB에서 생성하지 않고 우리가 직접 넣겠다!

    // @PrimaryGeneratedColumn('uuid')

    @PrimaryGeneratedColumn()
    id: number;

    // 제목
    @Column({
        //데이터 베이스에서 인지하는 컬럼 타입
        // 자동으로 유추된다.
        type: "varchar",

        // 데이터베이스 컬럼 이름
        // 프로퍼티 이름으로 자동 유추된다.
        name: "_title",

        // 값의 길이
        // 입력할 수 있는 글자의 길이가 300
        length: 300,

        // null이 가능한지
        nullable: true,

        // true면 처음 저장할때만 값 지정 가능
        // 이후에는 값 변경 불가능
        update: true,

        // find()를 실행할 때 기본적으로 값을 불러올지
        // 기본값이 true
        select: true,

        // 기본 값
        // 아무것도 입력 안했을 때 기본으로 입력되게
        default: 'default value',

        // 컬럼중에서 유일무이한 값이 돼야하는지
        unique: true

    })
    title: string;

    // 데이터 생성 일자
    // 데이터가 생성되는 날짜와 시간이 자동으로 찍힌다.
    @CreateDateColumn()
    createdAt: Date;

    // 데이터 업데이트 일자
    // 데이터가 업데이트되는 날짜와 시간이 자동으로 찍힌다.
    @UpdateDateColumn()
    updatedAt: Date;

    // 데이터가 업데이트 될 때마다 1씩 올라간다.
    // 처음 생성되면 값은 1이다.
    // 정확히는 save() 함수가 몇번 불렸는지 기억한다.
    @VersionColumn()
    version: number;

    @Column()
    @Generated('increment')
    additionalId: number;

    @Column()
    @Generated('uuid')
    additionalId2: string;
}