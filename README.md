# Hướng dẫn build docker cho recruitment test node app:
- dupliacate file *.env.example*, đổi tên thành *.env*
- build docker images:
```
docker-compose build
```
- khởi động các containers (thêm flag -d nếu chạy ở chế độ nền):
```
docker-compose up
```
- khởi tạo dữ liệu cho database:
```
docker exec -it recruitment-node node seeder.js
```
- mở địa chỉ http://localhost:3005 trên trình duyệt để chạy ứng dụng
