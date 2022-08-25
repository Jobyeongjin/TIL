# [DB] QuerySet API 📝

## **Filter 응용 💭**

| 키워드                      | 설명                                              | ORM / SQL                                                                                                                                                                                                              |
| --------------------------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| gt                          | ~ 보다 큰                                         | Entry.objects.filter(id\_\_gt=4 )<br />-> SELECT ... WHERE id > 4;                                                                                                                                                     |
| gte                         | ~ 같거나 큰                                       | Entry.objects.filter(id\_\_gte=4)<br />-> SELECT ... WHERE id >= 4;                                                                                                                                                    |
| lt                          | ~ 보다 작은                                       | Entry.objects.filter(id\_\_lt=4)<br />-> SELECT ... WHERE id < 4;                                                                                                                                                      |
| lte                         | ~ 같거나 작은                                     | Entry.objects.filter(id\_\_lte=4)<br />-> SELECT ... WHERE id <= 4;                                                                                                                                                    |
| in                          | ~ 안에 존재하는                                   | Entry.objects.filter(id\_\_in=[1, 3, 4])<br />-> SELECT ... WHERE id IN (1, 3, 4);<br />Entry.objects.filter(headline\_\_in='abc<br />-> SELECT ... WHERE headline IN ('a', 'b', 'c');                                 |
| startswith<br />istartswith | ~로 시작하는<br />~로 시작하는(대소문자 구별없이) | Entry.objects.filter(headline\_\_startswith='Lennon')<br />-> SELECT ... WHERE headline LIKE 'Lennon%';<br />Entry.objects.filter(headline\_\_istartswith='Lennon')<br />-> SELECT ... WHERE headline ILIKE 'Lennon%'; |
| endswith<br />iendswith     | ~로 끝나는<br />~로 끝나는(대소문자 구별없이)     | Entry.objects.filter(headline\_\_endswith='Lennon')<br />Entry.objects.filter(headline\_\_ㅑendswith='Lennon')<br />-> SELECT ... WHERE headline LIKE '%Lennon';<br />-> SELECT ... WHERE headline ILIKE '%Lennon';    |
| contains                    | ~문자열을 포함하는                                | Entry.objects.get(headline\_\_contains='Lennon')<br />-> SELECT ... WHERE headline LIKE '%Lennon%';                                                                                                                    |
|                             |                                                   |                                                                                                                                                                                                                        |

<br />

## **range 💭**

```python
import datetime
start_date = datetime.date(2005, 1, 1)
end_date = datetime.date(2005, 3, 31)
Entry.objects.filter(pub_date__range(start_date, end_date))
```

```sql
SELECT ... WHERE pub_date
BETWEEN '2005-01-01' and '2005-03-31'
```

<br />

## **복합 활용 💭**

```python
inner_qs = Blog.objects.filter(name__contains='Cheddar')
entries = Entry.objects.filter(blog__in=inner__qs)
```

```sql
SELECT ...
WHERE blog.id IN (SELECT id FROM ... WHERE NAME LIKE '%Cheddar%')
```

<br />

## **활용 💭**

- 첫번째 요소

```python
# 첫번째 요소
Entry.objects.all()[0]
```

```sql
SELECT ... LIMIT 1;
```

- 오름차순, 내림차순

```python
# 오름차순, 내림차순
Entry.objects.order_by('id')
Entry.objects.order_by('-id')
```

```sql
SELECT ... ORDER BY id;
SELECT ... ORDER BY id DESC;
```

<br />

---

# [DB] ORM 확장 📝

## **모델링(ORM) 💭**

```python
class Genre(models.Model):
  name = models.CharField(max_length=30)


class Artist(models.Model):
  name = models.CharField(max_length=30)
  debut = models.DateField()


class Album(models.Model):
  name = models.CharField(max_length=30)
  genre = models.ForeignKey('Genre', on_delete=models.CASCADE)
  artist = models.ForeignKey('Artist', on_delete=models.CASCADE)

album = Album()
album.name = '꽃'
album.genre = 1 # 🚨오류 발생 -> ValueError : Cannot assign "1" : "Album.genre" must be a "Genre" instance

# 해결방법
genre = Genre.objects.get(id=1)
album.genre = genre
artist = Artist.objects.get(id=1)
album.artist = artist
album.save()

# 실제 필드에서는 _id가 붙는다.
album = Album()
album.genre_id = 1
album.artist_id = 1
album.name = '미아'
album.save()
```

<br />

### models.ForeignKey 필드

- `2개의 필수 위치 인자`

  - Model class : 참조하는 모델
  - On_delete : 외래 키가 참조하는 객체가 삭제되었을 때 처리 방식

  | 옵션        | 설명                                              |
  | ----------- | ------------------------------------------------- |
  | CASCADE     | 부모 객체가 삭제됐을 때 이를 참조하는 객체도 삭제 |
  | PROTECT     | 삭제되지 않음                                     |
  | SET_NULL    | NULL 설정                                         |
  | SET_DEFAULT | 기본 값 설정                                      |

<br />

### Foreign Key (외래키)

- 키를 사용하여 `부모 테이블의 유일한 값을 참조 (참조 무결성)`
  - 데이터베이스 관계 모델에서 관련된 2개의 테이블 간의 일관성
- 외래 키의 값이 반드시 부모 테이블의 기본 키일 필요는 없지만 유일한 값이어야 함

<br />

### 참조와 역참조

```python
# 1. 참조
# 앨범의 id가 1인 것은?
album = Album.objects.get(id=1)
album.artist
# 장르의 이름은?
album.genre.name

# 2. 역참조 -> _set.all()
# album의 인스턴스가 담긴 쿼리셋을 가져온다.
# id가 1인 장르의 모든 앨범은?
genre = Genre.objects.get(id=1)
genre.album_set.all()
```

<br />

### Create

```python
artist = Artist.objects.get(1)
genre = Genre.objects.get(1)

album = Album()
album.name = '앨범1'
album.artist = artist
album.genre = genre
album.save()
```
