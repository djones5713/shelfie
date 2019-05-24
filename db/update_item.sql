update items
set name = $2
where item_id = $1;

select * from items;