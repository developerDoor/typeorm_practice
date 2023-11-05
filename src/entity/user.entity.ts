import {
    Column,
    CreateDateColumn,
    Entity,
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
    @Column()
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
    @VersionColumn()
    version: number;

}