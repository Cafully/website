# Plugin

Custom a simple plugin that print a log when the plugin is loading

## Install

Drop the plugin to the `plugin` folder

## Custom

### Create A Project

Create a project,Take the `Gradle` project as an example

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

The version of the central repository

[![Maven Central](https://img.shields.io/maven-central/v/cn.enaium.cafully/cafully-agent?style=flat-square)](https://central.sonatype.com/search?smo=true&q=cafully-api)

```groovy
repositories {
    maven { url 'https://jitpack.io' }
}

dependencies {
    compileOnly 'com.github.Cafully.cafully:cafully-api:1.1.1'
}
```

If you used `jitpack` also add `jitpack` repository

The version of the `jitpack` repository

[![JitPack](https://img.shields.io/jitpack/version/com.github.Cafully/cafully?style=flat-square)](https://jitpack.io/#Cafully/cafully)

### Main Class

Create a class `cn.enaium.cafully.example.Example`, implement `cn.enaium.cafully.plugin.api.IInitializer` interface

append `cn.enaium.cafully.plugin.annotation.Plugin` annotation

```java
@Plugin(unique = "example", name = "Example Plugin", version = "1.0.0", api = ">=1.1.1")
public class Example implements IInitializer {
    @Override
    public void initialize(IHelper plugin) throws Throwable {
    }
}
```

`unique`The unique identity of the plugin,`name`Plugin name,`version`Plugin version,`api`API version

Invoke the `initialize` method of the plugin when the plugin is loading, and eventually the plugin will print log

```java
@Override
public void initialize(IHelper plugin) throws Throwable {
    plugin.plugin().logger().info("Hello Example World!");
}
```

### Final Step

Add the name of the main class to manifest in build config

```
jar {
    manifest.attributes(
            'Manifest-Version': 1.0,
            'Main-Class': 'cn.enaium.cafully.example.Example'
    )
}
```

Okay, A simple plugin is done