# 베이스 이미지 선택
FROM node:14-alpine

# 작업 디렉토리 설정
WORKDIR /app

# 앱 종속성 설치
COPY package*.json ./
RUN npm install

# 앱 소스 코드 복사
COPY . .

# 프로덕션 빌드 생성 (선택 사항)
# RUN npm run build

# 앱 실행
CMD ["npm", "start"]
