# 📌 유튜브 영상 실시간 요약 서비스: Pre-View

## Table of Contents
* [Medium](#medium)
* [Demo Video](#📹-demo-video)
* [System Architechture](#system-architechture)
* [Tech Stack](#tech-stack)
* [ERD](#erd)
* [API](#api)
* [Monitoring](#monitoring)
* [How to start](#how-to-start)
* [Team Members](#team-members)

## ✨ [Medium](#medium)

## 📹 Demo Video

## 🐋 System Architechture
![System Architechture](https://github.com/2023-Winter-Bootcamp-Team-N/2023WB-Team-N/assets/154861396/39b743f5-fcb6-48aa-b0f2-45012a8e5a00)

## 💡 Tech Stack
|Area|Tech Stack|
|:---:|:---:|
|<b>Frontend</b>|<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white"> <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white"> <img src="https://img.shields.io/badge/Prettier-FFCC00?style=for-the-badge&logo=prettier&logoColor=white">|
|<b>Backend</b>|<img src="https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white"> <img src="https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray"> <img src="https://img.shields.io/badge/Amazon%20S3-569A31?style=for-the-badge&logo=Amazon%20S3&logoColor=white"> <img src="https://img.shields.io/badge/postgresql-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"> <img src="https://img.shields.io/badge/Rabbitmq-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white"> <img src="https://img.shields.io/badge/celery-%23a9cc54.svg?style=for-the-badge&logo=celery&logoColor=ddf4a4">|
|<b>AI</b>|<img src="https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white">|
|<b>DevOps</b>|<img src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"> <img src="https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white"> <img src="https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white"> <img src="https://img.shields.io/badge/Github Actions-2088FF?style=for-the-badge&logo=Github Actions&logoColor=white">|
|<b>Monitoring</b>|<img src="https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=Prometheus&logoColor=white"> <img src="https://img.shields.io/badge/grafana-%23F46800.svg?style=for-the-badge&logo=grafana&logoColor=white"> <img src="https://img.shields.io/badge/elastic stack-005571?style=for-the-badge&logo=elasticstack&logoColor=white"> <img src="https://img.shields.io/badge/cadvisor-2196F3?style=for-the-badge&logo=cadvisor&logoColor=white"> <img src="https://img.shields.io/badge/Node Exporter-4CAF50?style=for-the-badge&logo=Node Exporter&logoColor=white">|
|<b>etc</b>|<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white"> <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white"> <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"> <img src="https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white"> <img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white"> <img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white">|

## 💾 ERD
![ERD](https://github.com/2023-Winter-Bootcamp-Team-N/2023WB-Team-N/assets/154861396/6543243b-eca0-4feb-a1ba-abd8b3f73f82)

## 🔑 API

## 🖥️ Monitoring

### Django

* Django에서 Prometheus를 통해 request,response에 대한 정보를 수집 한 후 Grafana를 통해 시각화

### Node Exporter
![Node Exporter](https://github.com/2023-Winter-Bootcamp-Team-N/2023WB-Team-N/assets/154861396/48444e7c-8122-48bd-af03-27eef627432d)
* Node Exporter를 통해 서버의 메모리, CPU 사용량, Network Traffic 등을 모니터링

### cAdvisor
![cAdvisor](https://github.com/2023-Winter-Bootcamp-Team-N/2023WB-Team-N/assets/154861396/f4bcb112-6909-45d5-a468-cc98d346c4fd)
* cAdvisor를 활용해 각 컨테이너의 CPU, Memory 사용량, Network 사용량 등을 모니터링

### ELK
![ELK](https://github.com/2023-Winter-Bootcamp-Team-N/2023WB-Team-N/assets/154861396/6c9059aa-0c22-446f-b627-826dff7dd194)
* ELK Stack을 활용하여 시스템 전반의 성능과 안정성을 모니터링

## 🚀 How to start
#### 1. Clone The Repository
```
https://github.com/2023-Winter-Bootcamp-Team-N/2023WB-Team-N.git
```
#### 2. env Setting
```
POSTGRES_DB=postgres
POSTGRES_USER=
POSTGRES_PASSWORD=

SECRET_KEY=""
OPENAI_API_KEY=""
DEVELOPER_KEY1=""
DEVELOPER_KEY2=""

AWS_ACCESS_KEY_ID = ""
AWS_SECRET_ACCESS_KEY = ""
# S3 버킷 및 파일 저장 경로 설정
AWS_STORAGE_BUCKET_NAME = "preview-project"
```
#### 3. Run Docker
```
docker-compose up --d
```

## 👥 Team Members
|Name|박세종|김주언|신수진|한승철|최지혜|최수하|
|---|---|---|---|---|---|---|
|Profile|![박세종](https://github.com/sejongpark.png)|![김주언](https://github.com/wndjs803.png)|![신수진](https://github.com/Shin-Sujin.png)|![한승철](https://github.com/HSCEHOL.png)|![최지혜](https://github.com/jihye1006.png)|![최수하](https://github.com/suha0523.png)|
|Role|Leader, Frontend, DevOps|Backend, DevOps|Frontend|Frontend|Backend, DevOps|Backend, DevOps|
|GitHub|[@sejongpark](https://github.com/sejongpark.png)|[@wndjs803](https://github.com/wndjs803.png)|[@Shin-Sujin](https://github.com/Shin-Sujin.png)|[@HSCEHOL](https://github.com/HSCEHOL.png)|[@jihye1006](https://github.com/jihye1006.png)|[@suha0523](https://github.com/suha0523.png)|

