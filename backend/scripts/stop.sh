#!/usr/bin/env bash
pid=`ps -aef | grep $1 | grep -v grep | awk '{print $2}'`
if [ -z "$pid" ]; then
    echo $1 process is not running.
else
    kill -9 $pid
    echo $1 process with process id $pid killed forcefuly.
fi