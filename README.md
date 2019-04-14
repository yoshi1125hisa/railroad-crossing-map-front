# 線路マップ
## 開発環境
- Apache Cordova

## 対応OS
- Android
- iOS
- ブラウザ(PWA)

---

## 実行方法

### iOS
iOSのエミュレータを起動して確認をします。

プロジェクトをビルドするためには、XCodeが必要となります。

コマンドライン用のXCodeをインストールするために以下のコマンドを実施します。

```
$ xcode-select --install
```

また、コマンドラインでXCodeのライセンスに同意するために、以下を入力します。

```
$ sudo xcodebuild -license
```

色々と聞かれますが、同意して下さい。

初回ビルドの際、XCodeのコンポーネントがインストールされないので、XCodeを起動し、コンポーネントをインストールします。

そして、iOSのエミュレータを起動し、動作確認をします。

```
$ cordova emulate ios
```

### Android

Androidのエミュレータを起動して確認をします。

`homebrew`でJDKをインストールします。

```
$ brew cask install java
```

最新のJDKでないものが欲しい場合は、caskroomのバージョンを確認し、インストールします。
例を以下に記載します。

```
$ brew tap caskroom/versions
```

JDK7のインストール方法

```
$ brew cask install caskroom/versions/zulu7
```

パスの設定は忘れずに実施して下さい。

AndroidStudioをインストールします。

こちらもパスの設定は忘れずに実施します。

```
$ brew cask install android-studio
```

AVDを指定してエミュレータを起動します。

```
$ cordova emulate android
```

権限の関係でエラーとなるため、以下のコマンドを実施してから再度、ビルド→エミュレートします。

```
$ chmod +x /cordovaプロジェクト名/platforms/android/gradlew
```
