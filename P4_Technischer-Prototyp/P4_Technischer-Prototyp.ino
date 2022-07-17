int licht; //In dieser Variable wird der Sensorwert gespeichert

void setup() {
  // put your setup code here, to run once:
 Serial.begin(9600);
 pinMode(13,OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  
  licht = analogRead(0); //ließt Sensorwert aus und speichert ihn in "licht"
  Serial.println(licht); 

  if(licht<200){ //wenn der Wert unter 200 ist, soll die LED leuchten
    digitalWrite(13, HIGH);
    
  } else { //wenn der Wert größer oder gleich 200 ist, soll die LED aus bleiben
    digitalWrite(13,LOW);
  }
}
