# 펫스테이1455 웹사이트

애견동반 독채펜션 &ldquo;펫스테이1455&rdquo; 홈페이지 정적 소스입니다. cafe24 웹호스팅(FTP 업로드형)에 그대로 업로드해 사용할 수 있도록 순수 HTML/CSS/JS로 제작했습니다.

기획 배경과 사이트맵은 [STORYBOARD.md](./STORYBOARD.md)를 참고하세요.

## 폴더 구조

```
petstay1455/
├── index.html          메인페이지
├── about.html          펜션소개 · 오시는 길
├── rooms.html          객실안내 (일반동 4 · 확장동 1)
├── facilities.html     부대시설
├── pet-guide.html      반려동물 안내
├── reservation.html    예약안내 (네이버예약 연동)
├── css/style.css       공통 스타일
├── js/main.js          공통 스크립트 (모바일 메뉴, 스크롤 효과)
└── images/             로고 · 사진 리소스
```

## 이미지 체크리스트 (필수)

`images/logo.png`, `images/logo-source.ai`는 이미 반영되어 있습니다.
아래 사진들은 **아직 실제 파일이 없는 자리표시자(placeholder)** 입니다. 대화에서 보여주신 사진들을 아래 파일명 그대로 저장해 `images/` 폴더에 넣으면 자동으로 화면에 나타납니다 (파일이 없으면 점선 패턴 + 라벨만 보이도록 되어 있습니다).

| 파일명 | 사용 위치 | 설명 |
|---|---|---|
| `room-bedroom.jpg` | 홈, 객실 | 침실 (흰색 침구, 개어놓은 이불) |
| `room-living-1.jpg` | 홈, 소개, 객실 | 거실 전경 (통유리·우물천장, TV) |
| `room-living-2.jpg` | 홈, 객실 | 거실 + 계단/주방 |
| `room-loft.jpg` | 홈, 객실 | 다락 라운지 (러그+좌식테이블) |
| `room-loft-2.jpg` | 홈, 부대시설, 객실 | 다락 라운지 2 (천장팬, 수납장) |
| `room-sofa.jpg` | 홈, 객실 | 소파 클로즈업 |
| `room-detail.jpg` | 소개 | 계단·블루도어 등 실내 디테일 |
| `facility-yard-wide.jpg` | 홈(히어로), 부대시설 | 옥상 애견마당 전경 |
| `facility-agility.jpg` | 부대시설 | 어질리티 기구 클로즈업 |
| `facility-bbq.jpg` | 홈, 부대시설 | 바비큐존 + 테이블/의자 |
| `facility-pool.jpg` | 홈, 부대시설 | 실외 수영장 |
| `pet-gallery-1.jpg` | 홈, 반려동물 안내 | 마당을 뛰는 강아지 |
| `pet-gallery-2.jpg` | 홈, 반려동물 안내 | 마당을 걷는 강아지 |
| `pet-gallery-3.jpg` | 홈, 반려동물 안내 | 함께 있는 두 마리 강아지 |

> 사진 용량은 각 300KB 이하로 압축 후 올리는 것을 권장합니다 (로딩 속도).

## 아직 채워야 할 내용 (`[ ]` 표시된 자리)

각 HTML 파일에서 다음 자리표시자를 실제 값으로 바꿔주세요 (전체 파일에서 `[` 로 검색하면 모두 찾을 수 있습니다).

- **사업자 정보** (모든 페이지 footer): 대표자명, 사업자등록번호, 주소, 전화번호
- **주소/오시는 길** (`index.html`, `about.html`): 정확한 주소, 대중교통/자가용 안내, 지도 API 연동
- **반려동물 동반 규정** (`pet-guide.html`): 실제 마리수·견종 제한, 목욕시설 여부
- **객실 스펙 및 요금** (`rooms.html`, `reservation.html`): 일반동/확장동 기준·최대인원, 평일/주말 요금, 체크인·아웃 시간

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
