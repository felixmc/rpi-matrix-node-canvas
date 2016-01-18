#!/bin/bash

CAM_SNAP=/home/pi/Pictures/cam/$(date +%F.%T).jpg
raspistill --rotation 90 -o $CAM_SNAP

echo $CAM_SNAP
