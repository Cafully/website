# Getting Started

## Overview

In the daily use of Java, sometimes it is necessary to modify a class at runtime, but it is too cumbersome to write an `agent`, so I code this framework

## Install

Go to [Cafully](https://github.com/Cafully/cafully/releases) Download the latest version

Add `JVM Options` when run java program

`-javaagent:/absolute/path/to/cafully-agent.jar`

If you useage `ASM` also add:

```sh
--add-opens=java.base/jdk.internal.org.objectweb.asm=ALL-UNNAMED
--add-opens=java.base/jdk.internal.org.objectweb.asm.commons=ALL-UNNAMED
--add-opens=java.base/jdk.internal.org.objectweb.asm.signature=ALL-UNNAMED
--add-opens=java.base/jdk.internal.org.objectweb.asm.tree=ALL-UNNAMED
--add-opens=java.base/jdk.internal.org.objectweb.asm.tree.analysis=ALL-UNNAMED
--add-opens=java.base/jdk.internal.org.objectweb.asm.util=ALL-UNNAMED
```