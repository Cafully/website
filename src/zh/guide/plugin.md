# 插件

实现一个简单的插件,在插件被加载时输出一条日志

## 安装

将插件拖动到`plugin`文件夹里

## 自制

### 创建项目

创建一个项目,这里以`Gradle`项目为例

```groovy
plugins {
    id 'java'
}

group 'cn.enaium.cafully'
version '1.0.0'

sourceCompatibility = targetCompatibility = JavaVersion.VERSION_1_8

repositories {
    mavenCentral()
}

dependencies {
    compileOnly 'cn.enaium.cafully:cafully-api:1.1.1'
}
```

其中`cafully-api`依赖就是`Cafully`的API

以中央参仓库的版本为准

[![Maven Central](https://img.shields.io/maven-central/v/cn.enaium.cafully/cafully-agent?style=flat-square)](https://central.sonatype.com/search?smo=true&q=cafully-api)

```groovy
repositories {
    maven { url 'https://jitpack.io' }
}

dependencies {
    compileOnly 'com.github.Cafully.cafully:cafully-api:1.1.1'
}
```

如果使用`jitpack`需要添加仓库

以`jitpack`仓库的版本为准

[![JitPack](https://img.shields.io/jitpack/version/com.github.Cafully/cafully?style=flat-square)](https://jitpack.io/#Cafully/cafully)

### 主类

创建一个类`cn.enaium.cafully.example.Example`,实现`cn.enaium.cafully.plugin.api.IInitializer`接口

添加`cn.enaium.cafully.plugin.annotation.Plugin`注解

```java
@Plugin(unique = "example", name = "Example Plugin", version = "1.0.0", api = ">=1.1.1")
public class Example implements IInitializer {
    @Override
    public void initialize(IHelper plugin) throws Throwable {
    }
}
```

`Plugin`注解,`unique`插件的唯一标识,`name`插件的名字,`version`插件的版本,`api`api的版本

插件在被加载时,会调用插件的`initialize`方法,这时调用插件的日志方法,输出一条日志

```java
@Override
public void initialize(IHelper plugin) throws Throwable {
    plugin.plugin().logger().info("Hello Example World!");
}
```

### 最后的步骤

在构建配置中将主类名添加到`manifest`中

```
jar {
    manifest.attributes(
            'Manifest-Version': 1.0,
            'Main-Class': 'cn.enaium.cafully.example.Example'
    )
}
```

好了,这样一个简单的插件就制作完成了