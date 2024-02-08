## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## 테스트 하는방법

```bash
#기본 실행 방법
$ yarn run test

#spec.ts 파일을 찾아서 테스트를 돌리게 될것이다.
```

## Issue

```bash
#커멘드가 통하지않을경우
$ nest g res [name]
# --> [name] = books

$ npx @nestjs/cli g res [name]

# 사용자마다 다르지만 편하게 res로 다 생성하는편.
$ npx @nestjs/cli g(generate) mo users
$ npx @nestjs/cli g co users
$ npx @nestjs/cli g s users


# 모듈을 생성하게되면  app.module 에 자동으로 import 된다.
```

## Test

TDD를 위한 프로젝트입니다.

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## License

Nest is [MIT licensed](LICENSE).
