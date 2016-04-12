#aspèrge (f): asparagus
#aubergine (f): eggplant
#banane (f): banana

echo "<table>"
while read line; do
echo "<tr>"
FR=`echo $line | cut -d':' -f1 | sed -e 's/^[[:space:]]*//'`
EN=`echo $line | cut -d':' -f2 | sed -e 's/^[[:space:]]*//'`

echo "<td><span class='french'>${FR}</span></td>"
echo "<td><span class='english'>${EN}</span></td>"

echo "</tr>"

done < $1
