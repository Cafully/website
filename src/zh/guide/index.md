# 快速开始

## 概述

在Java的日常使用中,有时需要在运行中修改某个类,但是去写一个`Agent`又显得太麻烦,所以我做了这个框架

## 安装

前往[Cafully](https://github.com/Cafully/cafully/releases)下载最新版本

在运行某个Java程序时,添加JVM参数,这里的路径就是`Cafully`的路径

`-javaagent:/absolute/path/to/cafully-agent.jar`

如果使用了`ASM`也要添加:

```sh
--add-opens=java.base/jdk.internal.org.objectweb.asm=ALL-UNNAMED
--add-opens=java.base/jdk.internal.org.objectweb.asm.commons=ALL-UNNAMED
--add-opens=java.base/jdk.internal.org.objectweb.asm.signature=ALL-UNNAMED
--add-opens=java.base/jdk.internal.org.objectweb.asm.tree=ALL-UNNAMED
--add-opens=java.base/jdk.internal.org.objectweb.asm.tree.analysis=ALL-UNNAMED
--add-opens=java.base/jdk.internal.org.objectweb.asm.util=ALL-UNNAMED
```