---
layout: about
title: 首页
permalink: /
subtitle: 四川大学 | 自动化（卓越工程师计划）
nav: true
nav_order: 1
description: 陈冠廷个人主页（中文）
lang_toggle: true

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info: >
    <p>电话: (+86) 13365983865</p>
    <p>邮箱: cgtgetting@163.com</p>
    <p>成都, 中国</p>

selected_papers: false
social: true

announcements:
  enabled: false
  scrollable: false
  limit: 0

latest_posts:
  enabled: false
  scrollable: false
  limit: 0
---

你好，我是陈冠廷，四川大学电气工程学院自动化（卓越工程师计划）本科生，主要关注机器人、具身智能与视觉感知方向。

必修加权平均分（前五学期）89.74，专业排名 11/164（前 7%）。

## 教育背景

- 四川大学（985/双一流 A 类建设高校），自动化（卓越工程师计划），2023.09 - 至今
- 核心课程：自动控制原理（93）、计算机程序设计基础（94）、数据结构与算法（92）、计算机组成与设计（96）、计算机网络与通信（95）
- 荣誉：四川大学优秀学生干部（4%）、四川大学综合二等奖学金、四川大学综合三等奖学金、唐仲英德育奖学金
- 英语能力：CET-4 590，CET-6 520

## 竞赛经历

### 第25届全国大学生机器人大赛 RoboCon 主赛道（视觉算法组组长）

- FAST-LIVO2 重定位开发优化：设计并实现 Teaser++ 全局粗配准 + GICP 局部精配准的级联方案，在未知初始位姿下实现高鲁棒定位，1 秒内完成解算。
- 视觉感知开发：负责 RealSense 深度流处理，完成 HSV 分割、YOLO 检测/分割及深度对齐，提取目标三维信息辅助决策。

### 第25届全国大学生机器人大赛 RoboCon 四足任务/障碍赛道（视觉算法组组长）

- 基于 HIMLoco 的 RL 训练：适配 12-DOF 机器狗 URDF/XML 模型，构建地形课程与动力学约束训练环境。
- 独立开发 Sim2Sim 与 Sim2Real 迁移模块：前端 Isaac Gym 到 MuJoCo 交叉验证，后端解决通信时延、电机动力学拟合与传感器噪声问题，完成真机部署。
- 拓展多源控制：尝试 MPC/VMC 腿足控制方案并主导搭建 Nav2 导航框架。

### 其他竞赛

- 2025 中国机器人大赛暨 RoboCup 中国赛（FIRA 小型组）全国三等奖，核心成员。
- 第二十七届中国机器人及人工智能大赛四川省一等奖、全国二等奖，核心成员。

## 科研经历

### 具身智能基准测试集科研实践（第二作者，ECCV 2026 在投）

- 参与清扫与抓取任务的高保真仿真场景搭建与测试环境开发。
- 在 Isaac Sim 中构建物理交互环境并设计多维度定量评估指标。

### 基于 SFT+GRPO 的多模态视觉缺陷检测模型研究（项目负责人）

- 面向下水道缺陷检测，基于 Qwen3-VL 开展多模态微调。
- 结合 IoU 与格式奖励优化强化学习目标函数，提升模型检测精度。

## 技能与实践

- 编程与系统：Linux、Python、C/C++、ROS、MATLAB
- 硬件与部署：PCB 设计、STM32/ESP32/ESP8266、Jetson Xavier
- 机械与制造：SolidWorks、3DBuilder、3D 打印
- 学生工作与公益：机器人足球协会部长，累计志愿服务 200+ 小时

## 图片展示（预留）

<div class="row">
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/demo-1.jpg" title="项目展示图 1" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/demo-2.jpg" title="项目展示图 2" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/demo-3.jpg" title="项目展示图 3" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

## 视频展示（预留）

{% include video.liquid path="assets/video/demo.mp4" class="img-fluid rounded z-depth-1" controls=true %}
