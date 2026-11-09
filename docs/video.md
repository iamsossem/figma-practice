# 영상 룩

우리 서비스 홍보 영상이 어떻게 보이는지 정한 기준이다. 장면 순서, 흐름, 구성은 레퍼런스와 비트 시트(장면별 시간표)가 정한다. 움직임은 `docs/motion.md`를 따른다.

- **규격:** 16:9, 1920 × 1080, 30fps
- **색·글꼴:** `docs/design.md`의 라이트 값만 쓴다.
- **영상 배율:** 영상 위 글자와 글자가 들어간 요소는 Figma 값 × 2.8로 키운다. 영상 화면이 Figma desktop 기준 폭(1440)과 같은 가로형이라 desktop 값에 곱한다.
- **룩 선택:** 배경 밝은 톤, 헤드라인 크고 꽉 차게, 엔드 카드 밝은 바탕 (2026-11-09 결정)
- **새 값:** design.md와 Figma에 없어 정한 값이다. 표에 "새 값"으로 표시했다.

## 1. 텍스트 최소 크기

| 토큰 | 값 | 출처 |
|---|---|---|
| `video-text-min` | 56px | design.md body desktop 20px × 2.8 |

- 영상 위에 얹는 글자는 56px보다 작게 쓰지 않는다.
- 폰 프레임 안의 앱 화면 글자는 앱 그대로 두고, 이 기준을 적용하지 않는다.
- 글자와 바탕의 명도 대비는 4.5:1 이상이다 (PRD 5.3).

## 2. 배경

| 토큰 | 값 | design.md 이름 | 쓰는 곳 |
|---|---|---|---|
| `video-bg` | #E6EDED | bg/surface | 본편 배경 |
| `video-end-bg` | #E6EDED | bg/surface | 엔드 카드 바탕 |
| `video-accent` | #004642 | bg/primary | 강조 상자 바탕 |

- 배경은 한 가지 색으로 채운다. 그라데이션, 무늬, 사진을 깔지 않는다.
- 다크 값은 design.md에서 초안이라 쓰지 않는다.

## 3. 글자

글꼴은 Pretendard만 쓴다. 크기와 행간은 design.md desktop 값 × 2.8, 굵기와 자간은 design.md 그대로다.

| 토큰 | 원래 스타일 | 굵기 | 크기 | 행간 | 자간 |
|---|---|---|---|---|---|
| `video-headline` | hero | 800 | 134.4px | 159.6px | 0% |
| `video-title` | h1 | 700 | 89.6px | 106.4px | -2% |
| `video-subtitle` | h2 | 600 | 78.4px | 92.4px | -2% |
| `video-label` | h3 | 600 | 61.6px | 72.8px | -2% |
| `video-body` | body | 400 | 56px | 67.2px | -2% |

- 헤드라인은 `video-headline` 하나로 크고 꽉 차게 쓴다.
- small(굵기 300)은 영상에서 쓰지 않는다. 같은 크기에서 body보다 가늘어 영상에서 잘 안 읽힌다.

### 글자 색

| 토큰 | 값 | design.md 이름 | 바탕 #E6EDED 위 대비 |
|---|---|---|---|
| `video-text` | #00201E | text/default | 14.44:1 |
| `video-heading` | #002A28 | text/heading | 12.98:1 |
| `video-on-accent` | #FFFFFF | text/on-primary | `video-accent` 위 10.74:1 |

- 대출 상태는 색만으로 말하지 않고 "대출가능"처럼 글자로 쓴다 (PRD 5.2).

## 4. 폰 프레임

앱 화면을 담는 틀이다. 특정 회사 제품으로 보이지 않게 카메라 구멍, 상태 표시줄 시계, 제조사 로고를 넣지 않는다.

| 토큰 | 값 | 출처 |
|---|---|---|
| `phone-screen` | 402 × 874 | Figma `mobile/*` 프레임 크기 |
| `phone-color` | #151515 | design.md gray-900 |
| `phone-bezel` | 12px | 새 값 |
| `phone-radius` | 바깥 48px, 화면 36px | 새 값. 화면 = 바깥 − 틀 두께 |
| `phone-shadow` | 0 40px 80px, #000000 불투명도 20% | 새 값. 불투명도는 design.md 버튼 그림자와 같다 |

- 앱 화면은 녹화나 Figma 화면을 그대로 넣는다. 영상용으로 다시 그리지 않는다.
- 폰 프레임 크기 배율은 정하지 않는다. 장면마다 레퍼런스와 비트 시트가 정한다.

## 5. parts

영상에 얹는 부품이다. 글자가 들어간 부품은 Figma 값 × 2.8로 키운다.

| 토큰 | 부품 | 값 | 출처 |
|---|---|---|---|
| `video-logo` | 로고 | Figma `SiteLogo` 그대로, 높이 134.4px | SiteLogo 높이 48 × 2.8 |
| `video-chip` | 강조 상자 | 바탕 `video-accent`, 글자 `video-on-accent` + `video-label`, 안쪽 여백 위아래 28px·좌우 44.8px, 모서리 44.8px | 버튼 여백 10·16 × 2.8, desktop 기본 라운드 16 × 2.8 |
| `video-caption` | 설명 한 줄 | `video-body` + `video-text` | 3장 |
| `video-end-card` | 엔드 카드 | 바탕 `video-end-bg`, `video-logo`, `video-headline` + `video-heading` | 2·3·5장 |
| `video-phone` | 폰 | 4장 폰 프레임 + 앱 화면 | 4장 |

- 로고는 색·비율·글자를 바꾸지 않는다.
- 부품의 위치와 등장 순서는 이 문서에서 정하지 않는다.
