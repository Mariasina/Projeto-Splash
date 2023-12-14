import datetime, time, firebase_admin, pytz
from firebase_admin import credentials, db

cred = credentials.Certificate('key_firebase.json')
firebase_admin.initialize_app(
    cred,
    {'databaseURL': 'https://projeto-splash-default-rtdb.firebaseio.com/'})

ref = db.reference('/')

while True:
  fuso_sp = pytz.timezone("America/Sao_Paulo")

  dt_utc = datetime.datetime.now(fuso_sp)

  formated_time = dt_utc.strftime("%H:%M:%S")

  ref.child('current_time').set({'time': str(formated_time)})

  time.sleep(0.5)
