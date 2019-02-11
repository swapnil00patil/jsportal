#!/usr/bin/env bash
pid=`ps -aef | grep $1 | grep -v grep | awk '{print $2}'`
if [ -z "$pid" ]; then
    echo $1 process is not running.
else
    kill -9 $pid
    echo $1 process with process id $pid killed forcefuly.
fi

nohup java -jar $1 2>&1 > output.txt &
pid=`ps -aef | grep $1 | grep -v grep | awk '{print $2}'`
if [ -z "$pid" ]; then
    echo $1 process has failed to start.
else
    echo $1 process has started with process id $pid.
fi