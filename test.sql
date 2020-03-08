SELECT *
FROM mytable;
create database test;
select *
from mytable limit;

-- asc 升序
--  desc 降序
select *
from mytable
order by col asc, col2 desc;

select *
from mytable
where col > 2;

select *
from mytable
where col like "[^ab]"

select col , Count(*) as num
from mytable
Group by col
order by num;

select col, Count(num) as nums
from mytable
where col >2
group by col
having nums >3;




select col, Count (num) as nums
from mytable
where col >2
group by col
having  nums >4;

select A.value, B.value
from tablea as A inner join tableB as B on A.key=B.key;