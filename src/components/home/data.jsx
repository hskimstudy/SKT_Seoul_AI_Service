cred = credentials.Certificate('apikim-17704-firebase-adminsdk-ncp61-6afeee53d7.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': "https://apikim-17704-default-rtdb.asia-southeast1.firebasedatabase.app"
})

# Update Firebase data
root = db.reference()
root.update({'자동차': ['기아', '현대', '벤츠', '현수', 'BMW', '송예지 누나']})

train_dir = db.reference('이동수단/기차')
train_dir.update({'1번': 'KTX'})
train_dir.update({'2번': '무궁화'})

print(root.get())
print(train_dir.get())