# 펫스테이1455 웹사이트

애견동반 독채펜션 &ldquo;펫스테이1455&rdquo; 홈페이지 정적 소스입니다. cafe24 웹호스팅(FTP 업로드형)에 그대로 업로드해 사용할 수 있도록 순수 HTML/CSS/JS로 제작했습니다.

기획 배경과 사이트맵은 [STORYBOARD.md](./STORYBOARD.md)를 참고하세요.

## 폴더 구조

```
petstay1455/
├── index.html          메인페이지
├── about.html          펜션소개 · 오시는 길
├── rooms.html          객실안내
├── facilities.html     부대시설
├── pet-guide.html      반려동물 안내
├── reservation.html    예약안내 (네이버예약 연동)
├── reviews.html        이용후기 (인스타그램 태그 사진 위젯)
├── css/style.css       공통 스타일
├── js/main.js          공통 스크립트 (모바일 메뉴, 스크롤 효과)
└── images/             로고 · 사진 리소스 (전부 반영 완료)
```

## 아직 채워야 할 내용

- **인스타그램 위젯 연동** (`reviews.html`) — SnapWidget(snapwidget.com) 등에 가입해 인스타그램 계정을 연결하고, 발급받은 embed `<iframe>` 코드를 `reviews.html`의 `.widget-slot` 블록 자리에 붙여넣어 주세요. 파일 안에 단계별 안내 주석이 있습니다.
- **인스타그램 계정 아이디** — `reviews.html`과 각 페이지 footer의 `[인스타그램 계정 아이디 입력]` 자리, footer SNS 아이콘(`href="#"`)을 실제 계정 링크로 교체해주세요.

## cafe24 배포 방법 (정적 웹호스팅)

1. cafe24 호스팅 관리자 &rarr; FTP 접속정보 확인
2. FTP 클라이언트(파일질라 등)로 접속 후, 이 폴더의 전체 내용을 웹 루트(`public_html` 또는 `www`)에 업로드
   - `index.html`이 루트에 위치해야 기본 접속 시 바로 보여집니다
3. 이미지 교체 후에도 같은 방식으로 `images/` 폴더만 재업로드하면 됩니다
4. 도메인 연결은 cafe24 호스팅 관리자의 &ldquo;도메인 연결&rdquo; 메뉴에서 진행합니다

## 로컬에서 미리보기

별도 서버 없이 `index.html`을 브라우저로 더블클릭해서 열어도 대부분 정상 확인 가능합니다. 정확한 확인을 원하면 이 폴더에서:

```bash
python3 -m http.server 8000
```

실행 후 `http://localhost:8000` 접속.
