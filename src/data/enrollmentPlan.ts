/**
 * 河北省物理类各高校历年招生计划数据（2021-2026）
 * 数据来源：掌上高考 (gaokao.cn)
 * 生成时间：2026-06-22
 * 注意：部分学校2026年招生计划尚未发布，数据会在发布后补充
 */

export interface MajorPlan {
  name: string;
  num: number;
  length: string;
  xuanke: string;
}

export interface YearPlan {
  totalPlan: number;
  majors: MajorPlan[];
}

export interface EnrollmentPlan {
  [year: string]: YearPlan;
}

export interface EnrollmentPlanData {
  [university: string]: EnrollmentPlan;
}

export const enrollmentPlanData: EnrollmentPlanData = {
  "北京大学": {
    "2021": {
      "totalPlan": 18,
      "majors": [
        {
          "name": "理科试验班类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 18,
      "majors": [
        {
          "name": "理科试验班类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 18,
      "majors": [
        {
          "name": "理科试验班类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 18,
      "majors": [
        {
          "name": "理科试验班类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 25,
      "majors": [
        {
          "name": "理科试验班类",
          "num": 25,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 29,
      "majors": [
        {
          "name": "理科试验班类",
          "num": 29,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "清华大学": {
    "2021": {
      "totalPlan": 38,
      "majors": [
        {
          "name": "理科试验班类",
          "num": 36,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "临床医学类",
          "num": 2,
          "length": "八年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2022": {
      "totalPlan": 37,
      "majors": [
        {
          "name": "理科试验班类",
          "num": 33,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "临床医学类",
          "num": 4,
          "length": "八年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2023": {
      "totalPlan": 37,
      "majors": [
        {
          "name": "理科试验班类",
          "num": 34,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "临床医学类",
          "num": 3,
          "length": "八年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2024": {
      "totalPlan": 35,
      "majors": [
        {
          "name": "理科试验班类",
          "num": 33,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "临床医学类",
          "num": 2,
          "length": "八年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 43,
      "majors": [
        {
          "name": "理科试验班",
          "num": 39,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学类",
          "num": 4,
          "length": "八年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 48,
      "majors": [
        {
          "name": "理科试验班",
          "num": 43,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学类",
          "num": 5,
          "length": "八年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "复旦大学": {
    "2021": {
      "totalPlan": 18,
      "majors": [
        {
          "name": "自然科学试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济管理试验班",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 19,
      "majors": [
        {
          "name": "技术科学试验班",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自然科学试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济管理试验班",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 19,
      "majors": [
        {
          "name": "技术科学试验班",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自然科学试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济管理试验班",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 19,
      "majors": [
        {
          "name": "工科试验班",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济管理试验班",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济学类",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2025": {
      "totalPlan": 20,
      "majors": [
        {
          "name": "工科试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 28,
      "majors": [
        {
          "name": "工科试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数据科学与大数据技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "上海交通大学": {
    "2021": {
      "totalPlan": 49,
      "majors": [
        {
          "name": "工科试验班类",
          "num": 33,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济管理试验班",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "人工智能",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 49,
      "majors": [
        {
          "name": "工科试验班类",
          "num": 23,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "人工智能",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济管理试验班",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 41,
      "majors": [
        {
          "name": "工科试验班类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "人工智能",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济管理试验班",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 36,
      "majors": [
        {
          "name": "工科试验班类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济管理试验班",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "金融学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 32,
      "majors": [
        {
          "name": "工科试验班类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 41,
      "majors": [
        {
          "name": "工科试验班类",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机器人工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "��子信息类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "具身智能",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "浙江大学": {
    "2021": {
      "totalPlan": 56,
      "majors": [
        {
          "name": "工科试验班",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 50,
      "majors": [
        {
          "name": "工科试验班",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 47,
      "majors": [
        {
          "name": "工科试验班",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 49,
      "majors": [
        {
          "name": "工科试验班",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 49,
      "majors": [
        {
          "name": "工科试验班",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 36,
      "majors": [
        {
          "name": "工科试验班",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "中国科学技术大学": {
    "2021": {
      "totalPlan": 30,
      "majors": [
        {
          "name": "理科试验班类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2022": {
      "totalPlan": 30,
      "majors": [
        {
          "name": "工科试验班",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 30,
      "majors": [
        {
          "name": "理科试验班类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 30,
      "majors": [
        {
          "name": "工科试验班",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 31,
      "majors": [
        {
          "name": "理科试验班类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 35,
      "majors": [
        {
          "name": "工科试验班",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "南京大学": {
    "2021": {
      "totalPlan": 38,
      "majors": [
        {
          "name": "经济管理试验班",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "金融工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机科学与技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "社会科学试验班",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "建筑类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 42,
      "majors": [
        {
          "name": "理科试验班",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "技术科学试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济管理试验班",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "金融工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "人工智能",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2023": {
      "totalPlan": 44,
      "majors": [
        {
          "name": "技术科学试验班",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机科学与技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "金融工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "人工智能",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2024": {
      "totalPlan": 45,
      "majors": [
        {
          "name": "技术科学试验班",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "金融工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2025": {
      "totalPlan": 45,
      "majors": [
        {
          "name": "技术科学试验班",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 41,
      "majors": [
        {
          "name": "技术科学试验班",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "中国人民大学": {
    "2021": {
      "totalPlan": 30,
      "majors": [
        {
          "name": "理科试验班",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "人力资源管理",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "社会科学试验班",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "财政学类",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "法学",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "新闻传播学类",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 31,
      "majors": [
        {
          "name": "理科试验班类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "社会科学试验班",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "财政学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "人力资源管理",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "法学",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "新闻传播学类",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 30,
      "majors": [
        {
          "name": "统计学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "社会科学试验班",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "财政学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "法学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "人工智能",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 28,
      "majors": [
        {
          "name": "统计学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "人工智能",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工商管理类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "财政学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "法学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "社会科学试验班",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2025": {
      "totalPlan": 22,
      "majors": [
        {
          "name": "统计学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "法学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "统计学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 22,
      "majors": [
        {
          "name": "计算机类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "统计学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "统计学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "法学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "北京航空航天大学": {
    "2021": {
      "totalPlan": 143,
      "majors": [
        {
          "name": "工科试验班类",
          "num": 57,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班类",
          "num": 49,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班类",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 143,
      "majors": [
        {
          "name": "工科试验班类",
          "num": 66,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班类",
          "num": 48,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班类",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班类",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 146,
      "majors": [
        {
          "name": "工科试验班类",
          "num": 66,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班类",
          "num": 48,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班类",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班类",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 136,
      "majors": [
        {
          "name": "工科试验班类",
          "num": 64,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班类",
          "num": 42,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "飞行器动力工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学与应用数学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工程力学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 144,
      "majors": [
        {
          "name": "工科试验班类",
          "num": 40,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班类",
          "num": 39,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班类",
          "num": 31,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "飞行器动力工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "飞行器动力工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 151,
      "majors": [
        {
          "name": "工科试验班类",
          "num": 42,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班类",
          "num": 39,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班类",
          "num": 32,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "飞行器动力工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "空间科学与技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "北京理工大学": {
    "2021": {
      "totalPlan": 125,
      "majors": [
        {
          "name": "工科试验班",
          "num": 54,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 25,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 25,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 127,
      "majors": [
        {
          "name": "工科试验班",
          "num": 43,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 31,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 23,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "会计学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 129,
      "majors": [
        {
          "name": "工科试验班",
          "num": 41,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 33,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 23,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "会计学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "光电信息科学与工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 127,
      "majors": [
        {
          "name": "工科试验班",
          "num": 38,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 36,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 29,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "会计学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2025": {
      "totalPlan": 133,
      "majors": [
        {
          "name": "工科试验班",
          "num": 45,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 33,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "会计学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源与动力工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "车辆工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 141,
      "majors": [
        {
          "name": "工科试验班",
          "num": 43,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 41,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "会计学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源与动力工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "车辆工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "哈尔滨工业大学": {
    "2021": {
      "totalPlan": 124,
      "majors": [
        {
          "name": "工科试验班",
          "num": 42,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 39,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 25,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "环境生态工程",
          "num": 5,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 114,
      "majors": [
        {
          "name": "工科试验班",
          "num": 43,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工��试验班",
          "num": 40,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "环境生态工程",
          "num": 4,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学与应用数学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "应用物理学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 1,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 98,
      "majors": [
        {
          "name": "工科试验班",
          "num": 30,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 29,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学与应用数学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "应用物理学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "大数据管理与应用",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工业设计",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 74,
      "majors": [
        {
          "name": "工科试验班",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "大数据管理与应用",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学与应用数学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "应用物理学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智慧建筑与建造",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2025": {
      "totalPlan": 59,
      "majors": [
        {
          "name": "工科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "应用物理学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学与应用数学",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "大数据管理与应用",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智慧建筑与建造",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 62,
      "majors": [
        {
          "name": "工科试验班",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "应用物理学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学与应用数学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "大数据管理与应用",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "智慧建筑与建造",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物技术",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "具身智能",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "西安交通大学": {
    "2021": {
      "totalPlan": 156,
      "majors": [
        {
          "name": "工科试验班",
          "num": 53,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 51,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 163,
      "majors": [
        {
          "name": "工科试验班",
          "num": 60,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 41,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工业设计",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "建筑学",
          "num": 7,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 157,
      "majors": [
        {
          "name": "工科试验班",
          "num": 63,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 35,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工业设计",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "建筑学",
          "num": 6,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学与应用数学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2024": {
      "totalPlan": 130,
      "majors": [
        {
          "name": "工科试验班",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "信息工程",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子科学与技术",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "微电子科学与工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工业设计",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 129,
      "majors": [
        {
          "name": "工科试验班",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "信息工程",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子科学与技术",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "微电子科学与工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工业设计",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "建筑学",
          "num": 7,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 108,
      "majors": [
        {
          "name": "信息工程",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子科学与技术",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "微电子科学与工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工业设计",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "武汉大学": {
    "2021": {
      "totalPlan": 75,
      "majors": [
        {
          "name": "工科试验班",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 6,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "测绘类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "遥感科学与技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 68,
      "majors": [
        {
          "name": "理科试验班",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "遥感科学与技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "测绘类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "临床医学",
          "num": 5,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2023": {
      "totalPlan": 68,
      "majors": [
        {
          "name": "电子信息类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "遥感科学与技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "临床医学",
          "num": 6,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2024": {
      "totalPlan": 74,
      "majors": [
        {
          "name": "电子信息类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "遥感科学与技术",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 6,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 72,
      "majors": [
        {
          "name": "工科试验班",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "遥感科学与技术",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智慧城市与空间规划",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 7,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "大数据管理与应用",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 65,
      "majors": [
        {
          "name": "电气工程及其自动化",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智慧城市与空间规划",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "遥感科学与技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "地理科学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "大数据管理与应用",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "临床医学",
          "num": 5,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "华中科技大学": {
    "2021": {
      "totalPlan": 111,
      "majors": [
        {
          "name": "电子信息类",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源动力类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "临床医学类",
          "num": 11,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "经济学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气工程及其自动化",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 93,
      "majors": [
        {
          "name": "机械类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源动力类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "临床医学类",
          "num": 11,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "电气工程及其自动化",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 77,
      "majors": [
        {
          "name": "机械类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气工程及其自动化",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源动力类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "临床医学类",
          "num": 8,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "材料类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 80,
      "majors": [
        {
          "name": "机械类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "能源动力类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物医学工程类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 6,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 78,
      "majors": [
        {
          "name": "能源动力类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 9,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物医学工程类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 83,
      "majors": [
        {
          "name": "能源动力类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物医学工程类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "光电信息科学与工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "中山大学": {
    "2021": {
      "totalPlan": 77,
      "majors": [
        {
          "name": "临床医学类",
          "num": 18,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "计算机类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "临床医学",
          "num": 4,
          "length": "八年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        }
      ]
    },
    "2022": {
      "totalPlan": 77,
      "majors": [
        {
          "name": "临床医学",
          "num": 16,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "航空航天类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "口腔医学",
          "num": 5,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "临床医学",
          "num": 2,
          "length": "八年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2023": {
      "totalPlan": 76,
      "majors": [
        {
          "name": "临床医学",
          "num": 16,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "电子信息类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "人工智能",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "地理科学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "航空航天类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "口腔医学",
          "num": 5,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "化学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 78,
      "majors": [
        {
          "name": "电子信息类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 17,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "航空航天类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "地理科学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "口腔医学",
          "num": 5,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2025": {
      "totalPlan": 75,
      "majors": [
        {
          "name": "临床医学",
          "num": 19,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "航空航天类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "口腔医学",
          "num": 5,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工商管理类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 78,
      "majors": [
        {
          "name": "电子信息类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 13,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "航空航天类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "口腔医学",
          "num": 3,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "四川大学": {
    "2021": {
      "totalPlan": 117,
      "majors": [
        {
          "name": "高分子材料与工程",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "航空航天类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "药学",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "生物科学类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "基础医学",
          "num": 8,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        }
      ]
    },
    "2022": {
      "totalPlan": 112,
      "majors": [
        {
          "name": "电气类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "高分子材料与工程",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "航空航天类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "药学",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "生物科学类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "医学技术类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 113,
      "majors": [
        {
          "name": "电气类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "高分子材料与工程",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "航空航天类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "药学",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "预防医学",
          "num": 8,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "医学技术类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2024": {
      "totalPlan": 132,
      "majors": [
        {
          "name": "高分子材料与工程",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药学类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "航空航天类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "医学技术类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 127,
      "majors": [
        {
          "name": "电气类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "医学技术类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药学类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 130,
      "majors": [
        {
          "name": "电子信息类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "南开大学": {
    "2021": {
      "totalPlan": 150,
      "majors": [
        {
          "name": "工科试验班",
          "num": 46,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班类",
          "num": 35,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "工商管理类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "临床医学",
          "num": 6,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "口腔医学",
          "num": 3,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        }
      ]
    },
    "2022": {
      "totalPlan": 149,
      "majors": [
        {
          "name": "工科试验班",
          "num": 46,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班类",
          "num": 35,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "工商管理类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "临床医学",
          "num": 5,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "口腔医学",
          "num": 3,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        }
      ]
    },
    "2023": {
      "totalPlan": 151,
      "majors": [
        {
          "name": "工科试验班",
          "num": 36,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班类",
          "num": 30,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "理科试验班",
          "num": 27,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "临床医学",
          "num": 5,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "口腔医学",
          "num": 3,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        }
      ]
    },
    "2024": {
      "totalPlan": 151,
      "majors": [
        {
          "name": "工科试验班",
          "num": 38,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 33,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "金融学类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "临床医学",
          "num": 5,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "口腔医学",
          "num": 3,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 147,
      "majors": [
        {
          "name": "工科试验班",
          "num": 35,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 28,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "金融学类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "临床医学",
          "num": 8,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 147,
      "majors": [
        {
          "name": "工科试验班",
          "num": 36,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 30,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 3,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "天津大学": {
    "2021": {
      "totalPlan": 337,
      "majors": [
        {
          "name": "工科试验班",
          "num": 72,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 55,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 40,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 34,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济管理试验班",
          "num": 31,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班",
          "num": 30,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "医学试验班",
          "num": 30,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2022": {
      "totalPlan": 356,
      "majors": [
        {
          "name": "工科试验班",
          "num": 82,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 48,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济管理试验班",
          "num": 38,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 38,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 35,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 34,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班",
          "num": 33,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "医学试验班",
          "num": 28,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "分子科学与工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "建筑类",
          "num": 10,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 364,
      "majors": [
        {
          "name": "工科试验班",
          "num": 92,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 52,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 43,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 42,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 40,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济管理试验班",
          "num": 32,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "医学试验班",
          "num": 28,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "光电信息科学与工程",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "建筑类",
          "num": 12,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "分子科学与工程",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2024": {
      "totalPlan": 356,
      "majors": [
        {
          "name": "工科试验班",
          "num": 88,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 51,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 46,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 44,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 40,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "医学试验班",
          "num": 28,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济管理试验班",
          "num": 26,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "光电信息科学与工程",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "分子科学与工程",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 338,
      "majors": [
        {
          "name": "工科试验班",
          "num": 88,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 51,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 46,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 33,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 30,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "医学试验班",
          "num": 27,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济管理试验班",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "光电信息科学与工程",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 319,
      "majors": [
        {
          "name": "工科试验班",
          "num": 82,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 69,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 67,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 35,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 26,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 25,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "光电信息科学与工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能医学工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "东南大学": {
    "2021": {
      "totalPlan": 143,
      "majors": [
        {
          "name": "工科试验班",
          "num": 32,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 25,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 25,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "建筑类",
          "num": 6,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物医学工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 143,
      "majors": [
        {
          "name": "工科试验班",
          "num": 48,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 30,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物医学工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "建筑类",
          "num": 6,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 143,
      "majors": [
        {
          "name": "工科试验班",
          "num": 57,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物医学工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "建筑类",
          "num": 6,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 100,
      "majors": [
        {
          "name": "工科试验班",
          "num": 37,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物医学工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 104,
      "majors": [
        {
          "name": "电子信息类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物医学工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "集成电路设计与集成系统",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "未来机器人",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 123,
      "majors": [
        {
          "name": "电子信息类",
          "num": 25,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 23,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机器人工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "集成电路设计与集成系统",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物医学工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "未来机器人",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "厦门大学": {
    "2021": {
      "totalPlan": 65,
      "majors": [
        {
          "name": "工科试验班",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机科学与技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "数学与应用数学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 83,
      "majors": [
        {
          "name": "工科试验班",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "理科试验班",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "能源动力类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "会计学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 81,
      "majors": [
        {
          "name": "工科试验班",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "理科试验班",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "物理学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源动力类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2024": {
      "totalPlan": 81,
      "majors": [
        {
          "name": "计算机类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济学类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "会计学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 88,
      "majors": [
        {
          "name": "计算机类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "统计学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源动力类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "会计学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 94,
      "majors": [
        {
          "name": "工科试验班",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "统计学类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "能源动力类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "网络空间安全",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "同济大学": {
    "2021": {
      "totalPlan": 141,
      "majors": [
        {
          "name": "工���试验班",
          "num": 35,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 28,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "技术科学试验班",
          "num": 26,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济管理试验班",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "医学试验班",
          "num": 6,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "机械类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 138,
      "majors": [
        {
          "name": "工科试验班",
          "num": 35,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "技术科学试验班",
          "num": 26,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 25,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济管理试验班",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "医学试验班",
          "num": 3,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        }
      ]
    },
    "2023": {
      "totalPlan": 134,
      "majors": [
        {
          "name": "工科试验班",
          "num": 36,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "技术科学试验班",
          "num": 26,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济管理试验班",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "医学试验班",
          "num": 4,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "临床医学",
          "num": 4,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        }
      ]
    },
    "2024": {
      "totalPlan": 133,
      "majors": [
        {
          "name": "工科试验班",
          "num": 55,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济管理试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "医学试验班",
          "num": 4,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 4,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 136,
      "majors": [
        {
          "name": "工科试验班",
          "num": 45,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 4,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "金融学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "医学试验班",
          "num": 4,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 134,
      "majors": [
        {
          "name": "工科试验班",
          "num": 45,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 5,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "医学试验班",
          "num": 5,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "信息管理与信息系统",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "山东大学": {
    "2021": {
      "totalPlan": 111,
      "majors": [
        {
          "name": "计算机类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气工程及其自动化",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源动力类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 108,
      "majors": [
        {
          "name": "计算机类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气工程及其自动化",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源动力类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2023": {
      "totalPlan": 109,
      "majors": [
        {
          "name": "机械类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源动力类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气工程及其自动化",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "智能建造与智慧交通",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2024": {
      "totalPlan": 114,
      "majors": [
        {
          "name": "机械类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "能源动力类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 125,
      "majors": [
        {
          "name": "能源动力类",
          "num": 25,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 8,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "护理学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选生物"
        },
        {
          "name": "工程软件",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 126,
      "majors": [
        {
          "name": "能源动力类",
          "num": 24,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "护理学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选生物"
        },
        {
          "name": "临床医学",
          "num": 8,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "工程软件",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "大连理工大学": {
    "2021": {
      "totalPlan": 212,
      "majors": [
        {
          "name": "软件工程",
          "num": 41,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 33,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化工与制药类",
          "num": 28,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "土木类",
          "num": 26,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源化学工程",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "环境生态工程",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "工商管理类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源与动力工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 182,
      "majors": [
        {
          "name": "电子信息类",
          "num": 36,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 35,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化工与制药类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工商管理类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源与动力工程",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "建筑类",
          "num": 9,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 169,
      "majors": [
        {
          "name": "电子信息类",
          "num": 37,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 32,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化工与制药类",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "管理科学与工程类",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源与动力工程",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "建筑类",
          "num": 13,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子科学与技术",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 181,
      "majors": [
        {
          "name": "电子信息类",
          "num": 72,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 30,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子科学与技术",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能制造工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能制造工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "能源与动力工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工程力学",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 165,
      "majors": [
        {
          "name": "电子信息类",
          "num": 81,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子科学与技术",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "大数据管理与应用",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "人工智能",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能制造工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工程力学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工程力学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 130,
      "majors": [
        {
          "name": "人工智能",
          "num": 68,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学与应用数学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能制造工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工程力学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "应用物理学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工程力学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "储能科学与工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "吉林大学": {
    "2021": {
      "totalPlan": 190,
      "majors": [
        {
          "name": "电子信息类",
          "num": 30,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "通信工程",
          "num": 28,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "会计学",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "交通运输类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "能源与动力工程",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "管理科学与工程类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "勘查技术与工程",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2022": {
      "totalPlan": 184,
      "majors": [
        {
          "name": "电子信息类",
          "num": 30,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "通信工程",
          "num": 28,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "交通运输类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "会计学",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "土木类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "勘查技术与工程",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "管理科学与工程类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2023": {
      "totalPlan": 155,
      "majors": [
        {
          "name": "电子信息类",
          "num": 25,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "会计学",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "通信工程",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "交通运输类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "管理科学与工程类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2024": {
      "totalPlan": 138,
      "majors": [
        {
          "name": "电子信息类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "会计学",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "通信工程",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "交通运输类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "车辆工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 133,
      "majors": [
        {
          "name": "电子信息类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "通信工程",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "交通运输类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "会计学",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "食品科学与工程类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "勘查技术与工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "土木类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 131,
      "majors": [
        {
          "name": "电子信息类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "通信工程",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "交通运输类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品科学与工程类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "能源与动力工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "车辆工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "中南大学": {
    "2021": {
      "totalPlan": 236,
      "majors": [
        {
          "name": "材料类",
          "num": 36,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "土木类",
          "num": 34,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化类",
          "num": 32,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 28,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 26,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "交通运输类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化工与制药类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学类",
          "num": 16,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "数学类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源动力类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 238,
      "majors": [
        {
          "name": "材料类",
          "num": 36,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 34,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "土木类",
          "num": 32,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 30,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 26,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "交通运输类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化工与制药类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学类",
          "num": 16,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "数学类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源动力类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 237,
      "majors": [
        {
          "name": "材料类",
          "num": 36,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 34,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "土木类",
          "num": 32,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 29,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 26,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "交通运输类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化工与制药类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学类",
          "num": 16,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "数学类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源动力类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 231,
      "majors": [
        {
          "name": "材料类",
          "num": 36,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 34,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 31,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "交通运输类",
          "num": 23,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "能源动力类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化工与制药类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学类",
          "num": 16,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "数学类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 240,
      "majors": [
        {
          "name": "材料类",
          "num": 40,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 36,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "能源动力类",
          "num": 30,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 25,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "交通运输类",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化工与制药类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学类",
          "num": 12,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        }
      ]
    },
    "2026": {
      "totalPlan": 225,
      "majors": [
        {
          "name": "机械类",
          "num": 31,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "交通运输类",
          "num": 30,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "能源动力类",
          "num": 30,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料科学与工程",
          "num": 30,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 28,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 16,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "计算机类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "湖南大学": {
    "2021": {
      "totalPlan": 51,
      "majors": [
        {
          "name": "机械类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料科学与工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "通信工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "建筑学",
          "num": 5,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "统计学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工业设计",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 47,
      "majors": [
        {
          "name": "机械类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料科学与工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "环境科学与工程类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "建筑学",
          "num": 5,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "统计学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工业设计",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气工程及其自动化",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 48,
      "majors": [
        {
          "name": "环境科学与工程类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "机械类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料科学与工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "建筑学",
          "num": 5,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "统计学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工业设计",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气工程及其自动化",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "通信工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 60,
      "majors": [
        {
          "name": "机械类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "通信工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料科学与工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "金融学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "应用物理学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "统计学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 77,
      "majors": [
        {
          "name": "电气工程及其自动化",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料科学与工程",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能制造工程",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "通信工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能车辆工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机科学与技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 76,
      "majors": [
        {
          "name": "电气工程及其自动化",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能车辆工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能制造工程",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料科学与工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "网络空间安全",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "通信工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "重庆大学": {
    "2021": {
      "totalPlan": 140,
      "majors": [
        {
          "name": "工科试验班",
          "num": 50,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 42,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "建筑类",
          "num": 6,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 5,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人文科学试验班",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 131,
      "majors": [
        {
          "name": "工科试验班",
          "num": 46,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 40,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "建筑类",
          "num": 6,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "管理科学与工程类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "临床医学",
          "num": 3,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2023": {
      "totalPlan": 135,
      "majors": [
        {
          "name": "工科试验班",
          "num": 40,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 26,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "建筑类",
          "num": 8,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "人文科学试验班",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "外国语言文学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "临床医学",
          "num": 3,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2024": {
      "totalPlan": 143,
      "majors": [
        {
          "name": "工科试验班",
          "num": 45,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 44,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 3,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 3,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 3,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 134,
      "majors": [
        {
          "name": "工科试验班",
          "num": 25,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 25,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人文科学试验班",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气工程及其自动化",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 3,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 152,
      "majors": [
        {
          "name": "工科试验班",
          "num": 38,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 30,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 30,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 24,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 3,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 3,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "电子科技大学": {
    "2021": {
      "totalPlan": 204,
      "majors": [
        {
          "name": "软件工程",
          "num": 29,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 25,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 25,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 194,
      "majors": [
        {
          "name": "工科试验班",
          "num": 25,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 25,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 178,
      "majors": [
        {
          "name": "电子信息类",
          "num": 25,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 23,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "临床医学",
          "num": 13,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        }
      ]
    },
    "2024": {
      "totalPlan": 178,
      "majors": [
        {
          "name": "电子信息类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 13,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 175,
      "majors": [
        {
          "name": "计算机类",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 165,
      "majors": [
        {
          "name": "电子信息类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "华南理工大学": {
    "2021": {
      "totalPlan": 53,
      "majors": [
        {
          "name": "机械类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "信息工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化工与制药类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2022": {
      "totalPlan": 53,
      "majors": [
        {
          "name": "工科试验班",
          "num": 10,
          "length": "4",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气类",
          "num": 7,
          "length": "4",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 6,
          "length": "4",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 6,
          "length": "4",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 5,
          "length": "4",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 5,
          "length": "4",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "交通运输类",
          "num": 4,
          "length": "4",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "信息工程",
          "num": 4,
          "length": "4",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 3,
          "length": "4",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 3,
          "length": "4",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 54,
      "majors": [
        {
          "name": "工科试验班",
          "num": 11,
          "length": "4",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气类",
          "num": 7,
          "length": "4",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 6,
          "length": "4",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 6,
          "length": "4",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 5,
          "length": "4",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 5,
          "length": "4",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "交通运输类",
          "num": 4,
          "length": "4",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "信息工程",
          "num": 4,
          "length": "4",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "大数据管理与应用",
          "num": 3,
          "length": "4",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 3,
          "length": "4",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 52,
      "majors": [
        {
          "name": "工科试验班",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "信息工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化工与制药类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 57,
      "majors": [
        {
          "name": "工科试验班",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "大数据管理与应用",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "信息工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 63,
      "majors": [
        {
          "name": "工科试验班",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "大数据管理与应用",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "西北工业大学": {
    "2021": {
      "totalPlan": 151,
      "majors": [
        {
          "name": "材料类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "航空航天类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化类",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "航空航天类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源动力类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "微电子科学与工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 141,
      "majors": [
        {
          "name": "材料类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "航空航天类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "航空航天类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源动力类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料科学与工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "高分子材料与工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 142,
      "majors": [
        {
          "name": "材料类",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "航空航天类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "航空航天类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源动力类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 128,
      "majors": [
        {
          "name": "自动化类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "航空航天类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "能源动力类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "航空航天类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "海洋工程类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 162,
      "majors": [
        {
          "name": "航空航天类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "航空航天类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "航空航天类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "航空航天类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 162,
      "majors": [
        {
          "name": "航空航天类",
          "num": 26,
          "length": "四年",
          "xuanke": "首选物理��再选化学"
        },
        {
          "name": "计算机类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "航空航天类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "航空航天类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "高分子材料与工程",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料科学与工程",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "兰州大学": {
    "2021": {
      "totalPlan": 121,
      "majors": [
        {
          "name": "计算机科学与技术",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学类",
          "num": 19,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "物理学类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "大气科学类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理论与应用力学",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工商管理类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选地理/生物(2选1)"
        },
        {
          "name": "化学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2022": {
      "totalPlan": 121,
      "majors": [
        {
          "name": "计算机科学与技术",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学类",
          "num": 19,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "物理学类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "大气科学类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理论与应用力学",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2023": {
      "totalPlan": 119,
      "majors": [
        {
          "name": "计算机科学与技术",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 20,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "物理学类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "大气科学类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工商管理类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选生物/地理(2选1)"
        }
      ]
    },
    "2024": {
      "totalPlan": 108,
      "majors": [
        {
          "name": "计算机科学与技术",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 20,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "大气科学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "口腔医学",
          "num": 7,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 111,
      "majors": [
        {
          "name": "临床医学",
          "num": 24,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "口腔医学",
          "num": 10,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理论与应用力学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "应用气象学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "大气科学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 68,
      "majors": [
        {
          "name": "临床医学",
          "num": 23,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "口腔医学",
          "num": 10,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物制药",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工商管理类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理论与应用力学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "大气科学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "地理科学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    }
  },
  "东北大学": {
    "2021": {
      "totalPlan": 182,
      "majors": [
        {
          "name": "计算机类",
          "num": 30,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化类",
          "num": 25,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济管理试验班",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料科学与工程",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物医学工程",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "智能制造工程",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 185,
      "majors": [
        {
          "name": "计算机类",
          "num": 30,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化类",
          "num": 27,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济管理试验班",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "智能制造工程",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料科学与工程",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物医学工程",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 184,
      "majors": [
        {
          "name": "机械类",
          "num": 30,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 25,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济管理试验班",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "智能制造工程",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料科学与工程",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物医学工程",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 180,
      "majors": [
        {
          "name": "机械类",
          "num": 30,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 25,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济管理试验班",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "智能制造工程",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料科学与工程",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物医学工程",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 166,
      "majors": [
        {
          "name": "机械类",
          "num": 30,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济管理试验班",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "智能制造工程",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料科学与工程",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物医学工程",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 164,
      "majors": [
        {
          "name": "机械类",
          "num": 30,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能制造工程",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料科学与工程",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济管理试验班",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物医学工程",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "中国农业大学": {
    "2021": {
      "totalPlan": 81,
      "majors": [
        {
          "name": "机械类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "水利类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "食品科学与工程类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "农学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "化学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "环境科学与工程类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "农业工程类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "动物科学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        }
      ]
    },
    "2022": {
      "totalPlan": 83,
      "majors": [
        {
          "name": "机械类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "食品科学与工程类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "电子信息类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "水利类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "环境科学与工程类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "农学",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "农业工程类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        }
      ]
    },
    "2023": {
      "totalPlan": 85,
      "majors": [
        {
          "name": "电子信息类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "食品科学与工程类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "水利类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "农学",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "环境科学与工程类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "农业工程类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 84,
      "majors": [
        {
          "name": "电子信息类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品科学与工程类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "水利类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "环境科学与工程类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "农学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "农业工程类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 74,
      "majors": [
        {
          "name": "电子信息类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品科学与工程类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "水利类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "水产养殖学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "设施农业科学与工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "农业工程类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物质科学与工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "农学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 80,
      "majors": [
        {
          "name": "电子信息类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品科学与工程类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "水利类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "水产养殖学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物质科学与工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "设施农业科学与工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "农业工程类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "动物科学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "中国海洋大学": {
    "2021": {
      "totalPlan": 45,
      "majors": [
        {
          "name": "数学与应用数学",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "食品科学与工程类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "海洋科学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "勘查技术与工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机科学与技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "食品科学与工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 50,
      "majors": [
        {
          "name": "数学与应用数学",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "食品科学与工程类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "海洋科学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "计算机科学与技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 51,
      "majors": [
        {
          "name": "计算机类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "食品科学与工程类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "海洋技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学与应用数学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "海洋科学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "数学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "大气科学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 51,
      "majors": [
        {
          "name": "计算机类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品科学与工程类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "海洋技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学与应用数学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "海洋科学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "大气科学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 55,
      "majors": [
        {
          "name": "计算机类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学与应用数学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品科学与工程类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品科学与工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "海洋科学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "海洋技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "大气科学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 55,
      "majors": [
        {
          "name": "材料类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "海洋技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品科学与工程类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "船舶与海洋工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "港口航道与海岸工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "大气科学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "北京师范大学": {
    "2021": {
      "totalPlan": 39,
      "majors": [
        {
          "name": "理科试验班",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "社会科学试验班",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 42,
      "majors": [
        {
          "name": "理科试验班",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "社会科学试验班",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 43,
      "majors": [
        {
          "name": "理科试验班",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "社会科学试验班",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 46,
      "majors": [
        {
          "name": "理科试验班",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "社会科学试验班",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "教育学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2025": {
      "totalPlan": 51,
      "majors": [
        {
          "name": "理科试验班",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "社会科学试验班",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "教育学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2026": {
      "totalPlan": 56,
      "majors": [
        {
          "name": "理科试验班",
          "num": 23,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "社会科学试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "教育学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    }
  },
  "华东师范大学": {
    "2021": {
      "totalPlan": 20,
      "majors": [
        {
          "name": "软件工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学与应用数学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "心理学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "统计学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "通信工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "微电子科学与工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机科学与技术",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "金融学类",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 20,
      "majors": [
        {
          "name": "物理学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学与应用数学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "心理学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "统计学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "通信工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机科学与技术",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学类",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 22,
      "majors": [
        {
          "name": "物理学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学与应用数学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "心理学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "统计学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "通信工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机科学与技术",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 24,
      "majors": [
        {
          "name": "计算机科学与技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "统计学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学与应用数学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "地理科学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "心理学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "统计学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "通信工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数据科学与大数据技术",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 29,
      "majors": [
        {
          "name": "微电子科学与工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "通信工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "统计学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "金融学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数据科学与大数据技术",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "统计学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "心理学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 25,
      "majors": [
        {
          "name": "软件工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "微电子科学与工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "统计学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "密码科学与技术",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数据科学与大数据技术",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "统计学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学与应用数学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "西北农林科技大学": {
    "2021": {
      "totalPlan": 148,
      "majors": [
        {
          "name": "机械类",
          "num": 31,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 23,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学类",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "水利类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "食品科学与工程类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "动物科学",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "葡萄与葡萄酒工程",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "环境科学",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "林业工程类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "动物医学类",
          "num": 8,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 147,
      "majors": [
        {
          "name": "生物科学类",
          "num": 23,
          "length": "4",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "计算机类",
          "num": 21,
          "length": "4",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 17,
          "length": "4",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "动物科学",
          "num": 16,
          "length": "4",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "食品科学与工程类",
          "num": 14,
          "length": "4",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "动物医学类",
          "num": 14,
          "length": "5",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "水利类",
          "num": 13,
          "length": "4",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "园艺",
          "num": 11,
          "length": "4",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "葡萄与葡萄酒工程",
          "num": 10,
          "length": "4",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "植物生产类",
          "num": 8,
          "length": "4",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        }
      ]
    },
    "2023": {
      "totalPlan": 138,
      "majors": [
        {
          "name": "生物科学类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "计算机类",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "动物医学类",
          "num": 14,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "水利类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "动物科学",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "食品科学与工程类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "植物生产类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "园艺",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "林业工程类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 161,
      "majors": [
        {
          "name": "计算机类",
          "num": 30,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学类",
          "num": 26,
          "length": "四年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "机械类",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "动物医学类",
          "num": 17,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "水利类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品科学与工程类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "植物生产类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工商管理类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "林业工程类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "动物科学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 157,
      "majors": [
        {
          "name": "计算机类",
          "num": 34,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "机械类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品科学与工程类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "水利类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "动物医学",
          "num": 15,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工商管理类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "动物科学",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "园艺",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "植物生产类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 149,
      "majors": [
        {
          "name": "计算机类",
          "num": 37,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "水利类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "园艺",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "动物医学",
          "num": 12,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品科学与工程",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "园艺",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品质量与安全",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智慧牧业科学与工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "中央民族大学": {
    "2021": {
      "totalPlan": 37,
      "majors": [
        {
          "name": "经济学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "环境科学与工程类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "法学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "信息与计算科学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "统计学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "光电信息科学与工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "外国语言文学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 99,
      "majors": [
        {
          "name": "经济学类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "统计学类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "环境科学与工程类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "信息与计算科学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "纳米材料与技术",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "光电信息科学与工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "法学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 99,
      "majors": [
        {
          "name": "经济学类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "电子信息类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "环境科学与工程类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "法学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "信息与计算科学",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "统计学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "纳米材料与技术",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 101,
      "majors": [
        {
          "name": "计算机类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "信息与计算科学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "统计学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "纳米材料与技术",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "光电信息科学与工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "环境科学与工程类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工商管理类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2025": {
      "totalPlan": 100,
      "majors": [
        {
          "name": "计算机类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济学类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "光电信息科学与工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "纳米材料与技术",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "统计学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "信息与计算科学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "环境科学与工程类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工商管理类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2026": {
      "totalPlan": 93,
      "majors": [
        {
          "name": "计算机类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "光电信息科学与工程",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "纳米材料与技术",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "统计学类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "信息与计算科学",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数据科学与大数据技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工商管理类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "北京大学医学部": {
    "2021": {
      "totalPlan": 26,
      "majors": [
        {
          "name": "临床医学",
          "num": 6,
          "length": "八年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "护理学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "药学",
          "num": 5,
          "length": "六年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 3,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "基础医学",
          "num": 2,
          "length": "八年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "口腔医学",
          "num": 2,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "预防医学",
          "num": 2,
          "length": "七年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "口腔医学",
          "num": 1,
          "length": "八年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2022": {
      "totalPlan": 24,
      "majors": [
        {
          "name": "临床医学",
          "num": 6,
          "length": "八年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药学",
          "num": 5,
          "length": "六年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 3,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "基础医学",
          "num": 2,
          "length": "八年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "口腔医学",
          "num": 2,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "预防医学",
          "num": 2,
          "length": "七年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "护理学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "英语",
          "num": 1,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "口腔医学",
          "num": 1,
          "length": "八年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2023": {
      "totalPlan": 23,
      "majors": [
        {
          "name": "临床医学",
          "num": 6,
          "length": "八年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药学",
          "num": 4,
          "length": "六年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 3,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "基础医学",
          "num": 2,
          "length": "八年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "口腔医学",
          "num": 2,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "预防医学",
          "num": 2,
          "length": "七年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "护理学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "英语",
          "num": 1,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "口腔医学",
          "num": 1,
          "length": "八年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2024": {
      "totalPlan": 25,
      "majors": [
        {
          "name": "临床医学",
          "num": 7,
          "length": "八年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药学",
          "num": 4,
          "length": "六年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "护理学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 3,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "口腔医学",
          "num": 2,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "预防医学",
          "num": 2,
          "length": "七年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "基础医学",
          "num": 1,
          "length": "八年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "口腔医学",
          "num": 1,
          "length": "八年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "英语",
          "num": 1,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2025": {
      "totalPlan": 26,
      "majors": [
        {
          "name": "临床医学",
          "num": 8,
          "length": "八年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "护理学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药学",
          "num": 4,
          "length": "六年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 3,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "预防医学",
          "num": 2,
          "length": "七年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "口腔医学",
          "num": 2,
          "length": "八年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "英语",
          "num": 1,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "口腔医学",
          "num": 1,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "基础医学",
          "num": 1,
          "length": "八年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 28,
      "majors": [
        {
          "name": "临床医学",
          "num": 8,
          "length": "八年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "护理学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药学",
          "num": 4,
          "length": "六年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 3,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "预防医学",
          "num": 2,
          "length": "七年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "口腔医学",
          "num": 2,
          "length": "八年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "基础医学",
          "num": 2,
          "length": "八年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "口腔医学",
          "num": 1,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "英语",
          "num": 1,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    }
  },
  "北京邮电大学": {
    "2021": {
      "totalPlan": 157,
      "majors": [
        {
          "name": "人工智能",
          "num": 23,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电信工程及管理",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "通信工程",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物联网工程",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子商务及法律",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "邮政工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 150,
      "majors": [
        {
          "name": "通信工程",
          "num": 24,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "人工智能",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电信工程及管理",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "网络空间安全",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物联网工程",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "智能科学与技术",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 155,
      "majors": [
        {
          "name": "人工智能",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电信工程及管理",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "通信工程",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "网络空间安全",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物联网工程",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "智能科学与技术",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 162,
      "majors": [
        {
          "name": "通信工程",
          "num": 23,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电信工程及管理",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "网络空间安全",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物联网工程",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能科学与技术",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 163,
      "majors": [
        {
          "name": "通信工程",
          "num": 24,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电信工程及管理",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "网络空间安全",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物联网工程",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能科学与技术",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 173,
      "majors": [
        {
          "name": "通信工程",
          "num": 28,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 26,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 25,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电信工程及管理",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物联网工程",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "网络空间安全",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能科学与技术",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "北京交通大学": {
    "2021": {
      "totalPlan": 144,
      "majors": [
        {
          "name": "理科试验班类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济管理试验班",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "交通运输类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "信息管理与信息系统",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 141,
      "majors": [
        {
          "name": "机械类",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济管理试验班",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "交通运输类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 133,
      "majors": [
        {
          "name": "电子信息类",
          "num": 19,
          "length": "4",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济管理试验班",
          "num": 17,
          "length": "4",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "交通运输类",
          "num": 16,
          "length": "4",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木类",
          "num": 14,
          "length": "4",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 14,
          "length": "4",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气类",
          "num": 14,
          "length": "4",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班",
          "num": 11,
          "length": "4",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班类",
          "num": 10,
          "length": "4",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 10,
          "length": "4",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "建筑类",
          "num": 8,
          "length": "5",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 120,
      "majors": [
        {
          "name": "交通运输类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济管理试验班",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 173,
      "majors": [
        {
          "name": "自动化类",
          "num": 38,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 31,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "交通运输类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济管理试验班",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "环境工程",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "会计学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机科学与技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "通信工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 160,
      "majors": [
        {
          "name": "自动化类",
          "num": 35,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 30,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 26,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "交通运输类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "环境工程",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "会计学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "通信工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "北京科技大学": {
    "2021": {
      "totalPlan": 155,
      "majors": [
        {
          "name": "材料科学与工程",
          "num": 24,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源动力类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "管理科学与工程类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "矿业类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 161,
      "majors": [
        {
          "name": "材料科学与工程",
          "num": 25,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源动力类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "管理科学与工程类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "冶金工程",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 154,
      "majors": [
        {
          "name": "机械类",
          "num": 25,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料科学与工程",
          "num": 25,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源动力类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "管理科学与工程类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "冶金工程",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 170,
      "majors": [
        {
          "name": "材料科学与工程",
          "num": 26,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 24,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "能源动力类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "大数据管理与应用",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工商管理类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "冶金工程",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 178,
      "majors": [
        {
          "name": "机械类",
          "num": 28,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "能源动力类",
          "num": 25,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料科学与工程",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "大数据管理与应用",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "通信工程",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 159,
      "majors": [
        {
          "name": "机械类",
          "num": 28,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料科学与工程",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "通信工程",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "大数据管理与应用",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源动力类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "北京化工大学": {
    "2021": {
      "totalPlan": 148,
      "majors": [
        {
          "name": "工科试验班",
          "num": 37,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 31,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 28,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化工与制药类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工商管理类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 149,
      "majors": [
        {
          "name": "自动化类",
          "num": 34,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 33,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 24,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化工与制药类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工商管理类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2023": {
      "totalPlan": 142,
      "majors": [
        {
          "name": "自动化类",
          "num": 37,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 29,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化工与制药类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工商管理类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料科学与工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2024": {
      "totalPlan": 146,
      "majors": [
        {
          "name": "自动化类",
          "num": 34,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 25,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化工与制药类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工商管理类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 137,
      "majors": [
        {
          "name": "理科试验班",
          "num": 23,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化工与制药类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 116,
      "majors": [
        {
          "name": "工科试验班",
          "num": 27,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工业设计",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "北京工业大学": {
    "2021": {
      "totalPlan": 40,
      "majors": [
        {
          "name": "金融学",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "交通运输类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "土木类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物医学工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "法学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "会计学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机器人工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物联网工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2022": {
      "totalPlan": 39,
      "majors": [
        {
          "name": "金融学",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "交通运输类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物医学工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "法学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机器人工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "环境科学与工程类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "城乡规划",
          "num": 3,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "会计学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 40,
      "majors": [
        {
          "name": "电子信息工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "交通运输类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物医学工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "金融学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物联网工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "法学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机器人工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "环境科学与工程类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2024": {
      "totalPlan": 48,
      "majors": [
        {
          "name": "金融学",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "交通运输类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物医学工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "会计学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机器人工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能建造",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "环境科学与工程类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 46,
      "majors": [
        {
          "name": "金融学",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "大数据管理与应用",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物医学工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "交通运输类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "会计学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "法学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "城乡规划",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 42,
      "majors": [
        {
          "name": "金融学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "大数据管理与应用",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物医学工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "法学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "会计学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "城乡规划",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "交通工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "北京林业大学": {
    "2021": {
      "totalPlan": 56,
      "majors": [
        {
          "name": "林业工程类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "林学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "车辆工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "园林",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "环境工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "食品科学与工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        }
      ]
    },
    "2022": {
      "totalPlan": 62,
      "majors": [
        {
          "name": "林业工程类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "林学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "风景园林",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "园林",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "车辆工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "环境工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "食品科学与工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 61,
      "majors": [
        {
          "name": "林业工程类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "林学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "风景园林",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "园林",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "车辆工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "食品科学与工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 60,
      "majors": [
        {
          "name": "计算机类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "林业工程类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "林学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "风景园林",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气工程及其自动化",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "车辆工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息科学与技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 51,
      "majors": [
        {
          "name": "计算机类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "风景园林",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "林学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工商管理类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息科学与技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "大数据管理与应用",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "园林",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选生物"
        }
      ]
    },
    "2026": {
      "totalPlan": 59,
      "majors": [
        {
          "name": "计算机类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "风景园林",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息科学与技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "信息管理与信息系统",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "林学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学与应用数学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "北京中医药大学": {
    "2021": {
      "totalPlan": 71,
      "majors": [
        {
          "name": "中医学",
          "num": 15,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "中医学",
          "num": 13,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "针灸推拿学",
          "num": 10,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "中药学",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "中医学",
          "num": 5,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "中药制药",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "护理学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "大数据管理与应用",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "公共管理类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "康复治疗学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2022": {
      "totalPlan": 76,
      "majors": [
        {
          "name": "中医学",
          "num": 15,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "中医学",
          "num": 13,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "中药学",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "针灸推拿学",
          "num": 10,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "中医学",
          "num": 6,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "护理学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "公共管理类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "中药制药",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "康复治疗学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "大数据管理与应用",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        }
      ]
    },
    "2023": {
      "totalPlan": 77,
      "majors": [
        {
          "name": "中医学",
          "num": 15,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "中药学",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "中医学",
          "num": 11,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "针灸推拿学",
          "num": 11,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "护理学",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "中医学",
          "num": 6,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "公共管理类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "中药制药",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "康复治疗学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "大数据管理与应用",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        }
      ]
    },
    "2024": {
      "totalPlan": 77,
      "majors": [
        {
          "name": "中医学",
          "num": 15,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "中药学",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "中医学",
          "num": 11,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "针灸推拿学",
          "num": 11,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "护理学",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "中医学",
          "num": 6,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "公共管理类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "中药制药",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "康复治疗学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "大数据管理与应用",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 82,
      "majors": [
        {
          "name": "中医学",
          "num": 16,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "中药学",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "中医学",
          "num": 11,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "针灸推拿学",
          "num": 10,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "护理学",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "中医学",
          "num": 6,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "中西医临床医学",
          "num": 5,
          "length": "九年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "中医学",
          "num": 5,
          "length": "九年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "大数据管理与应用",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "康复治疗学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 89,
      "majors": [
        {
          "name": "中医学",
          "num": 17,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "中医学",
          "num": 16,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "中药学",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "针灸推拿学",
          "num": 12,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "护理学",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "中西医临床医学",
          "num": 6,
          "length": "九年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "中医学",
          "num": 6,
          "length": "九年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "大数据管理与应用",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "中医学",
          "num": 4,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "中药制药",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "北京外国语大学": {
    "2021": {
      "totalPlan": 10,
      "majors": [
        {
          "name": "外交学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选思想政治"
        },
        {
          "name": "外交学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选思想政治"
        },
        {
          "name": "英语",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "德语",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 9,
      "majors": [
        {
          "name": "英语",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "英语",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "外交学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选思想政治"
        },
        {
          "name": "金融学",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "国际经济与贸易",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "西班牙语",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 8,
      "majors": [
        {
          "name": "英语",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "西班牙语",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "国际经济与贸易",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "英语",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 8,
      "majors": [
        {
          "name": "英语",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "国际经济与贸易",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "法学",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "英语",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "翻译",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2025": {
      "totalPlan": 8,
      "majors": [
        {
          "name": "大数据管理与应用",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "德语",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "翻译",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "阿拉伯语",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "英语",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "外交学",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选思想政治"
        }
      ]
    },
    "2026": {
      "totalPlan": 9,
      "majors": [
        {
          "name": "大数据管理与应用",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "翻译",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "德语",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "英语",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "英语",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "法学",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数字经济",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    }
  },
  "中国传媒大学": {
    "2021": {
      "totalPlan": 22,
      "majors": [
        {
          "name": "翻译",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "广播电视工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "新闻学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "广告学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "广告学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "传播学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "网络与新媒体",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "国际新闻与传播",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "通信工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 27,
      "majors": [
        {
          "name": "智能科学与技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "广播电视工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "翻译",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "新闻学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "广告学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "广告学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "传播学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "传播学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "国际新闻与传播",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 28,
      "majors": [
        {
          "name": "智能科学与技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "广播电视工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数字媒体技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "翻译",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "新闻学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "广告学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "广告学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "传播学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "国际新闻与传播",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 37,
      "majors": [
        {
          "name": "数字媒体技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能科学与技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数字媒体技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数字媒体技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能科学与技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数据科学与大数据技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "广告学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2025": {
      "totalPlan": 37,
      "majors": [
        {
          "name": "智能科学与技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数字媒体技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数据科学与大数据技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "广告学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "新闻学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "政治学与行政学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选思想政治"
        },
        {
          "name": "智能科学与技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数字媒体技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数字媒体技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 39,
      "majors": [
        {
          "name": "数字媒体技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能科学与技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能科学与技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数据科学与大数据技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "网络空间安全",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数字媒体技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数字媒体技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能工程与创意设计",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能视听工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "中央财经大学": {
    "2021": {
      "totalPlan": 50,
      "majors": [
        {
          "name": "国际经济与贸易",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "财政学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "投资学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "精算学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济与贸易类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 48,
      "majors": [
        {
          "name": "金融学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "国际经济与贸易",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "财政学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "投资学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "精算学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济与贸易类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 48,
      "majors": [
        {
          "name": "财政学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "国际经济与贸易",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "保险学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "投资学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "精算学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济与贸易类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 51,
      "majors": [
        {
          "name": "统计学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "财政学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "国际经济与贸易",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "精算学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 51,
      "majors": [
        {
          "name": "统计学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "国际经济与贸易",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "投资学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "财政学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "大数据管理与应用",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "保险学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 52,
      "majors": [
        {
          "name": "统计学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "国际经济与贸易",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "金融学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "财政学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "大数据管理与应用",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "法学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    }
  },
  "对外经济贸易大学": {
    "2021": {
      "totalPlan": 39,
      "majors": [
        {
          "name": "金融学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "保险学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "投资学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济统计学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融数学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "精算学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数据科学与大数据技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 41,
      "majors": [
        {
          "name": "金融学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "精算学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "人工智能",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济统计学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融数学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融科技",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数据科学与大数据技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "法学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 38,
      "majors": [
        {
          "name": "金融学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "精算学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济统计学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融数学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融科技",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数据科学与大数据技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "法学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 41,
      "majors": [
        {
          "name": "金融学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数据科学与大数据技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "精算学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济统计学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融数学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "法学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2025": {
      "totalPlan": 47,
      "majors": [
        {
          "name": "金融工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数据科学与大数据技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "精算学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数据科学与大数据技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工商管理类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济统计学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融数学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "法学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2026": {
      "totalPlan": 45,
      "majors": [
        {
          "name": "数据科学与大数据技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "金融工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数据科学与大数据技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "金融学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "精算学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "保险学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "统计学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "精算学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济统计学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    }
  },
  "中国政法大学": {
    "2021": {
      "totalPlan": 37,
      "majors": [
        {
          "name": "法学",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "法学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "英语",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "信息管理与信息系统",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "新闻学",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "网络与新媒体",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "国际商务",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 37,
      "majors": [
        {
          "name": "法学",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "法学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "英语",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "信息管理与信息系统",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "新闻学",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "网络与新媒体",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "国际商务",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 37,
      "majors": [
        {
          "name": "法学",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "法学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "英语",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "信息管理与信息系统",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "新闻学",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "网络与新媒体",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "国际商务",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 34,
      "majors": [
        {
          "name": "法学",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "法学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "英语",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "信息管理与信息系统",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "公共事业管理",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2025": {
      "totalPlan": 42,
      "majors": [
        {
          "name": "法学",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "法学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "信息管理与信息系统",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "英语",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "法学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "法学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "法学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2026": {
      "totalPlan": 39,
      "majors": [
        {
          "name": "法学",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "法学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "国际商务",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "信息管理与信息系统",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "法律英语",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "法学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "法学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "法学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    }
  },
  "上海财经大学": {
    "2021": {
      "totalPlan": 36,
      "majors": [
        {
          "name": "经济学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "法学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "统计学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机科学与技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "财务管理",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子商务",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 34,
      "majors": [
        {
          "name": "法学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "统计学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机科学与技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子商务",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "信息管理与信息系统",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "财务管理",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 33,
      "majors": [
        {
          "name": "统计学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机科学与技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子商务",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "法学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "信息管理与信息系统",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "财务管理",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 34,
      "majors": [
        {
          "name": "统计学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子商务",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "法学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "信息管理与信息系统",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "会计学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "财务管理",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2025": {
      "totalPlan": 33,
      "majors": [
        {
          "name": "电子商务",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机科学与技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "统计学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "财务管理",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "会计学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "信息管理与信息系统",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "法学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "会计学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2026": {
      "totalPlan": 39,
      "majors": [
        {
          "name": "经济学",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机科学与技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "统计学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "财务管理",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "会计学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "信息管理与信息系统",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数据科学与大数据技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "法学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    }
  },
  "上海外国语大学": {
    "2021": {
      "totalPlan": 6,
      "majors": [
        {
          "name": "数据科学与大数据技术",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "国际经济与贸易",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "法学",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "新闻传播学类",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "会计学",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 6,
      "majors": [
        {
          "name": "国际经济与贸易",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "西班牙语",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "新闻传播学类",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 5,
      "majors": [
        {
          "name": "新闻传播学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "国际经济与贸易",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "西班牙语",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "意大利语",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 2,
      "majors": [
        {
          "name": "新闻传播学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2025": {
      "totalPlan": 6,
      "majors": [
        {
          "name": "数据科学与大数据技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "西班牙语",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2026": {
      "totalPlan": 6,
      "majors": [
        {
          "name": "数据科学与大数据技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "法学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    }
  },
  "上海大学": {
    "2021": {
      "totalPlan": 65,
      "majors": [
        {
          "name": "电气类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "信息工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "通信工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料科学与工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2022": {
      "totalPlan": 60,
      "majors": [
        {
          "name": "电气类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "信息工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "通信工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料科学与工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 62,
      "majors": [
        {
          "name": "信息工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "通信工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料科学与工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2024": {
      "totalPlan": 63,
      "majors": [
        {
          "name": "电气类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "信息工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "通信工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料科学与工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 64,
      "majors": [
        {
          "name": "电气类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "信息工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料科学与工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "通信工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 64,
      "majors": [
        {
          "name": "电气类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "信息工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料科学与工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "通信工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "东华大学": {
    "2021": {
      "totalPlan": 39,
      "majors": [
        {
          "name": "电子信息类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济管理试验班",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工业设计",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "智能制造工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 41,
      "majors": [
        {
          "name": "计算机类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "人工智能",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "功能材料",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济管理试验班",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 41,
      "majors": [
        {
          "name": "计算机类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选��限"
        },
        {
          "name": "机械工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "人工智能",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "理科试验班类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "功能材料",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济管理试验班",
          "num": 2,
          "length": "��年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 50,
      "majors": [
        {
          "name": "电子信息类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "功能材料",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 58,
      "majors": [
        {
          "name": "电子信息类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "纺织工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "环境科学与工程类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 67,
      "majors": [
        {
          "name": "电子信息类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "理科试验班",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能制造工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "纺织工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "华东理工大学": {
    "2021": {
      "totalPlan": 78,
      "majors": [
        {
          "name": "化工与制药类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物工程类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "能源动力类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "药学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 77,
      "majors": [
        {
          "name": "工科试验班",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物工程类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "电子信息类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "药学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        }
      ]
    },
    "2023": {
      "totalPlan": 79,
      "majors": [
        {
          "name": "工科试验班",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物工程类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "电子信息类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "药学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        }
      ]
    },
    "2024": {
      "totalPlan": 81,
      "majors": [
        {
          "name": "工科试验班",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物工程类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 90,
      "majors": [
        {
          "name": "机械类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物工程类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "应用化学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 90,
      "majors": [
        {
          "name": "机械类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物工程类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "应用化学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "南京航空航天大学": {
    "2021": {
      "totalPlan": 92,
      "majors": [
        {
          "name": "航空航天类",
          "num": 28,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气工程及其自动化",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "飞行器适航技术",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "管理科学与工程类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "微电子科学与工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "航空航天工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "测控技术与仪器",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 87,
      "majors": [
        {
          "name": "航空航天类",
          "num": 28,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气工程及其自动化",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "飞行器适航技术",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "微电子科学与工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "航空航天工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "大数据管理与应用",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "测控技术与仪器",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 87,
      "majors": [
        {
          "name": "航空航天类",
          "num": 33,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "测控技术与仪器",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气工程及其自动化",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "飞行器适航技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料科学与工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "微电子科学与工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "管理科学与工程类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 80,
      "majors": [
        {
          "name": "航空航天类",
          "num": 31,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "测控技术与仪器",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "微电子科学与工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "飞行器适航技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "大数据管理与应用",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "应用物理学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 96,
      "majors": [
        {
          "name": "航空航天类",
          "num": 38,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "微电子科学与工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工业工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "飞行器适航技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能制造工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 98,
      "majors": [
        {
          "name": "航空航天类",
          "num": 35,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "微电子科学与工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工业工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "飞行器控制与信息工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "信息安全",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "南京理工大学": {
    "2021": {
      "totalPlan": 91,
      "majors": [
        {
          "name": "自动化类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "兵器类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "武器发射工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化工与制药类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "环境科学与工程类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数据科学与大数据技术",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 106,
      "majors": [
        {
          "name": "电子信息类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "兵器类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源动力类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "武器发射工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "探测制导与控制技术",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "智能制造工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 104,
      "majors": [
        {
          "name": "电子信息类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "兵器类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "智能制造工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源动力类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "武器发射工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "探测制导与控制技术",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "微电子科学与工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 110,
      "majors": [
        {
          "name": "电子信息类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "兵器类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "微电子科学与工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "武器发射工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "探测制导与控制技术",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能制造工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "测控技术与仪器",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 128,
      "majors": [
        {
          "name": "自动化类",
          "num": 30,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 24,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "兵器类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "微电子科学与工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能制造工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数据科学与大数据技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "网络空间安全",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 127,
      "majors": [
        {
          "name": "电子信息类",
          "num": 38,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 26,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "航空航天类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "兵器类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "兵器类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "网络空间安全",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数据科学与大数据技术",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能科学与技术",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "河海大学": {
    "2021": {
      "totalPlan": 59,
      "majors": [
        {
          "name": "电气工程及其自动化",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "港口航道与海岸工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "海洋科学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "水利水电工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料科学与工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源与动力工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "水文与水资源工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "地质工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 62,
      "majors": [
        {
          "name": "电气工程及其自动化",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "水利水电工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "港口航道与海岸工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "海洋科学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料科学与工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "农业水利工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源与动力工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机科学与技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 72,
      "majors": [
        {
          "name": "土木工程",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机科学与技术",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "海洋科学",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气工程及其自动化",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "水利水电工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "港口航道与海岸工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "农业水利工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "水文与水资源工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源与动力工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 72,
      "majors": [
        {
          "name": "土木工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "农业水利工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "海洋科学",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "水利水电工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "水文与水资源工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "港口航道与海岸工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料科学与工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 82,
      "majors": [
        {
          "name": "港口航道与海岸工程",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "水文与水资源工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "水利水电工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "能源与动力工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料科学与工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "农业水利工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "水务工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 89,
      "majors": [
        {
          "name": "水利水电工程",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "港口航道与海岸工程",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料科学与工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "水文与水资源工程",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "能源与动力工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "新能源科学与工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能制造工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "南京师范大学": {
    "2021": {
      "totalPlan": 39,
      "majors": [
        {
          "name": "海洋资源与环境",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "能源动力类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "地理科学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学/地理(2选1)"
        },
        {
          "name": "计算机科学与技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "测绘工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 40,
      "majors": [
        {
          "name": "海洋资源与环境",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "自动化",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源动力类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "地理科学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学/地理(2选1)"
        },
        {
          "name": "计算机科学与技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "测绘工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 43,
      "majors": [
        {
          "name": "能源动力类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "环境科学与工程类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "测绘工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "计算机科学与技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "物理学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "海洋资源与环境",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "教育技术学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 49,
      "majors": [
        {
          "name": "海洋资源与环境",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "能源动力类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "环境科学与工程类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "测绘工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "地理科学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选地理"
        },
        {
          "name": "应用心理学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2025": {
      "totalPlan": 53,
      "majors": [
        {
          "name": "能源动力类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "环境科学与工程类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能装备与系统",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "海洋资源与环境",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "教育技术学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "地理科学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选地理"
        },
        {
          "name": "电气工程及其自动化",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 65,
      "majors": [
        {
          "name": "能源动力类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "环境科学与工程类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能装备与系统",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "海洋资源与环境",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "声学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "教育技术学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    }
  },
  "苏州大学": {
    "2021": {
      "totalPlan": 21,
      "majors": [
        {
          "name": "纺织类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械电子工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "建筑环境与能源应用工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "冶金工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "纳米材料与技术",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2022": {
      "totalPlan": 24,
      "majors": [
        {
          "name": "建筑学",
          "num": 3,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "城乡规划",
          "num": 3,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "风景园林",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "历史建筑保护工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融数学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "冶金工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "金属材料工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "纳米材料与技术",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2023": {
      "totalPlan": 20,
      "majors": [
        {
          "name": "数学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "纳米材料与技术",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学工程与工艺",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "城乡规划",
          "num": 2,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "风景园林",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "临床医学",
          "num": 2,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        }
      ]
    },
    "2024": {
      "totalPlan": 20,
      "majors": [
        {
          "name": "数学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物技术",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "车辆工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "纳米材料与技术",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 2,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 2,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "医学影像学",
          "num": 2,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 23,
      "majors": [
        {
          "name": "金属材料工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "财政学",
          "num": 2,
          "length": "���年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "药学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物制药",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "放射医学",
          "num": 2,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "医学影像学",
          "num": 2,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 2,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 2,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物制药",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 22,
      "majors": [
        {
          "name": "临床医学",
          "num": 3,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物制药",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "放射医学",
          "num": 2,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "医学影像学",
          "num": 2,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 2,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物制药",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "江南大学": {
    "2021": {
      "totalPlan": 77,
      "majors": [
        {
          "name": "自动化",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "纺织工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品科学与工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 8,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "光电信息科学与工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "高分子材料与工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学工程与工艺",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "服装设计与工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "英语",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "人工智能",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 75,
      "majors": [
        {
          "name": "自动化",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "纺织工程",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品科学与工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 8,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "高分子材料与工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "光电信息科学与工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学工程与工艺",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "教育技术学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "英语",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "人工智能",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 75,
      "majors": [
        {
          "name": "自动化",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "纺织工程",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "高分子材料与工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "光电信息科学与工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学工程与工艺",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "环境工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 7,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "药学",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "过程装备与控制工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 82,
      "majors": [
        {
          "name": "机械工程",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "纺织工程",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学工程与工艺",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "合成生物学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "信息与计算科学",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "高分子材料与工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "光电信息科学与工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "环境工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 7,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 77,
      "majors": [
        {
          "name": "机械工程",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "纺织工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "制药工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学工程与工艺",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "光电信息科学与工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "高分子材料与工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数字经济",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "药学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 79,
      "majors": [
        {
          "name": "机械工程",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "高分子材料与工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "制药工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学工程与工艺",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "光电信息科学与工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "轻化工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "中国药科大学": {
    "2021": {
      "totalPlan": 87,
      "majors": [
        {
          "name": "药学类",
          "num": 41,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "中药学类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "化工与制药类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床药学",
          "num": 6,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "生物制药",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "生物技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "药学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床药学",
          "num": 2,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2022": {
      "totalPlan": 85,
      "majors": [
        {
          "name": "药学类",
          "num": 41,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "中药学类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "化工与制药类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物制药",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "生物技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "临床药学",
          "num": 4,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "药学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床药学",
          "num": 2,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2023": {
      "totalPlan": 87,
      "majors": [
        {
          "name": "药学类",
          "num": 42,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "中药学类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "化工与制药类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物制药",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "生物技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "生物制药",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "中药学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "临床药学",
          "num": 2,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "药学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2024": {
      "totalPlan": 87,
      "majors": [
        {
          "name": "药学类",
          "num": 42,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "中药学类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化工与制药类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物制药",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药事管理",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物制药",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床药学",
          "num": 2,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 86,
      "majors": [
        {
          "name": "药学类",
          "num": 39,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "中药学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物制药",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化工与制药类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床药学",
          "num": 4,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药物经济与管理",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 90,
      "majors": [
        {
          "name": "药学类",
          "num": 39,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物制药",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "中药学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化工与制药类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床药学",
          "num": 5,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化妆品科学与技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "南京农业大学": {
    "2021": {
      "totalPlan": 130,
      "majors": [
        {
          "name": "机械类",
          "num": 36,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "环境科学与工程类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "食品科学与工程类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "动物医学类",
          "num": 12,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "植物保护",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "生物科学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "农学",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "公共管理类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "园艺",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        }
      ]
    },
    "2022": {
      "totalPlan": 118,
      "majors": [
        {
          "name": "机械类",
          "num": 24,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "环境科学与工程类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "食品科学与工程类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "农业工程类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "动物医学类",
          "num": 12,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "电子信息类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "农学",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "园艺",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "公共管理类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 116,
      "majors": [
        {
          "name": "机械类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "食品科学与工程类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "环境科学与工程类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "动物医学类",
          "num": 13,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "电子信息类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "植物保护",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "信息资源管理",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "农学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "国际经济与贸易",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 122,
      "majors": [
        {
          "name": "机械类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品科学与工程类",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "环境科学与工程类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "动物医学类",
          "num": 13,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "农学",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "植物保护",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "投资学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融科技",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2025": {
      "totalPlan": 125,
      "majors": [
        {
          "name": "食品科学与工程类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "动物医学类",
          "num": 15,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "环境科学与工程类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "金融科技",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "植物保护",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "农学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "统计学",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 131,
      "majors": [
        {
          "name": "食品科学与工程类",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "动物医学类",
          "num": 15,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "农学",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "统计学",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "环境科学与工程类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "会计学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "植物保护",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "武汉理工大学": {
    "2021": {
      "totalPlan": 215,
      "majors": [
        {
          "name": "材料类",
          "num": 29,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化工与制药类",
          "num": 26,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "机械类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源动力类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 211,
      "majors": [
        {
          "name": "材料类",
          "num": 30,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化工与制药类",
          "num": 27,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "机械类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化类",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "海洋工程类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 211,
      "majors": [
        {
          "name": "材料类",
          "num": 30,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化工与制药类",
          "num": 27,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 23,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化类",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械设计制���及其自动化",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 206,
      "majors": [
        {
          "name": "机械类",
          "num": 24,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 24,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化工与制药类",
          "num": 24,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 23,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "交通运输类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 208,
      "majors": [
        {
          "name": "材料类",
          "num": 29,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 26,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 23,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化工与制药类",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "船舶与海洋工程",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 211,
      "majors": [
        {
          "name": "电子信息类",
          "num": 32,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 30,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 24,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 23,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化工与制药类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "船舶与海洋工程",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "华中师范大学": {
    "2021": {
      "totalPlan": 30,
      "majors": [
        {
          "name": "化学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数字媒体技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "教育学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "科学教育",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "社会学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "教育技术学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "体育教育",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 41,
      "majors": [
        {
          "name": "计算机类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子商务",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "统计学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数字媒体技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "教育学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "科学教育",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "管理科学与工程类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 42,
      "majors": [
        {
          "name": "计算机类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子商务",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "统计学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数字媒体技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "教育学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "心理学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "管理科学与工程类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 44,
      "majors": [
        {
          "name": "计算机类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子商务",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "统计学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数字媒体技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "教育学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "心理学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2025": {
      "totalPlan": 46,
      "majors": [
        {
          "name": "计算机类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "管理科学与工程类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子商务",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "心理学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "信息资源管理",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2026": {
      "totalPlan": 53,
      "majors": [
        {
          "name": "计算机类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "法学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "信息资源管理",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "大数据管理与应用",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数字媒体技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "华中农业大学": {
    "2021": {
      "totalPlan": 132,
      "majors": [
        {
          "name": "植物生产类",
          "num": 23,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "机械类",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "环境科学与工程类",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "水产类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "食品科学与工程类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "计算机类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "农业工程类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "应用化学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "动物医学",
          "num": 8,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        }
      ]
    },
    "2022": {
      "totalPlan": 129,
      "majors": [
        {
          "name": "机械类",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "环境科学与工程类",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "植物生产类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "水产类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "食品科学与工程类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "智慧农业",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "计算机类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "农业工程类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "动物医学",
          "num": 8,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        }
      ]
    },
    "2023": {
      "totalPlan": 129,
      "majors": [
        {
          "name": "机械类",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "环境科学与工程类",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "植物生产类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "水产类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "食品科学与工程类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "计算机类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "智慧农业",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "生物科学类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "农业工程类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "动物医学",
          "num": 8,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        }
      ]
    },
    "2024": {
      "totalPlan": 117,
      "majors": [
        {
          "name": "机械类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "植物生产类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品科学与工程类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智慧农业",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "水产类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生态学",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "园艺",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "农业工程类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 117,
      "majors": [
        {
          "name": "植物生产类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品科学与工程类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智慧农业",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "园艺",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生态学",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "水产类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "公共管理类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "环境科学与工程类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 118,
      "majors": [
        {
          "name": "智慧农业",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "农业工程类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品科学与工程类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "园艺",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生态学",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "动物医学",
          "num": 10,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "应用化学",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "管理科学与工程类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    }
  },
  "中南财经政法大学": {
    "2021": {
      "totalPlan": 57,
      "majors": [
        {
          "name": "计算机类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融数学",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，���选不限"
        },
        {
          "name": "法学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "统计学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "财政学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "环境工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "管理科学与工程类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 58,
      "majors": [
        {
          "name": "统计学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融数学",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "法学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "财政学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "管理科学与工程类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "外国语言文学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 58,
      "majors": [
        {
          "name": "统计学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融数学",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "法学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "财政学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "管理科学与工程类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "外国语言文学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 52,
      "majors": [
        {
          "name": "统计学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "金融数学",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "法学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "公共管理类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济统计学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "管理科学与工程类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "管理科学与工程类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "环境工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 62,
      "majors": [
        {
          "name": "统计学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "法学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "会计学",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融数学",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "金融学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "财政学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济统计学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2026": {
      "totalPlan": 76,
      "majors": [
        {
          "name": "统计学类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "法学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "会计学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "人工智能",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济管理试验班",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济统计学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "财政学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "精算学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    }
  },
  "西南交通大学": {
    "2021": {
      "totalPlan": 86,
      "majors": [
        {
          "name": "土木工程",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气工程与智能控制",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "通信工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "智能制造工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "新能源科学与工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "智能建造",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源动力类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 83,
      "majors": [
        {
          "name": "土木工程",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "应用物理学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "智能制造工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "新能源科学与工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气工程及其自动化",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "通信工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 79,
      "majors": [
        {
          "name": "土木工程",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "应用物理学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "智能制造工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "新能源科学与工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气工程及其自动化",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "智慧交通",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2024": {
      "totalPlan": 82,
      "majors": [
        {
          "name": "土木工程",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工商管理类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "应用物理学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "车辆工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能制造工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "新能源科学与工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智慧交通",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 78,
      "majors": [
        {
          "name": "工商管理类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化��"
        },
        {
          "name": "计算机类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智慧交通",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能制造工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "新能源科学与工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "车辆工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "交通运输类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 75,
      "majors": [
        {
          "name": "电气工程及其自动化",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智慧交通",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能制造工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "新能源科学与工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "车辆工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "西南财经大学": {
    "2021": {
      "totalPlan": 28,
      "majors": [
        {
          "name": "金融学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济与贸易类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "外国语言文学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "统计学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "信息管理与信息系统",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "财政学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学与应用数学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 34,
      "majors": [
        {
          "name": "计算机类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融数学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物流管理",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "统计学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "信息管理与信息系统",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "财政学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 30,
      "majors": [
        {
          "name": "金融学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融数学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物流管理",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济与贸易类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "统计学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "信息管理与信息系统",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济统计学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 31,
      "majors": [
        {
          "name": "金融学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融数学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济统计学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "统计学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "金融工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "精算学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "管理科学与工程类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "信息管理与信息系统",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "市场营销",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学与应用数学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 36,
      "majors": [
        {
          "name": "市场营销",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "会计学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融数学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "统计学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "信息管理与信息系统",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济统计学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "国际商务",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2026": {
      "totalPlan": 37,
      "majors": [
        {
          "name": "市场营销",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融数学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "供应链管理",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "会计学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "大数据管理与应用",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "统计学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "管理科学与工程类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "国际商务",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学与应用数学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "四川农业大学": {
    "2021": {
      "totalPlan": 52,
      "majors": [
        {
          "name": "生物技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "食品科学与工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "金融学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "社会工作",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源与动力工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物联网工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "道路桥梁与渡河工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "农业机械化及其自动化",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "农业水利工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "建筑学",
          "num": 5,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 44,
      "majors": [
        {
          "name": "生物技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "食品科学与工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "经济学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "国际经济与贸易",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "社会工作",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "英语",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "广告学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "能源与动力工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 47,
      "majors": [
        {
          "name": "农林经济管理",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "食品科学与工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "金融学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "社会工作",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "英语",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "广告学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "能源与动力工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子科学与技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 45,
      "majors": [
        {
          "name": "生物技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品科学与工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人力资源管理",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "能源与动力工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子科学与技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物联网工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "道路桥梁与渡河工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "农业工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "农业机械化及其自动化",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 47,
      "majors": [
        {
          "name": "食品科学与工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "农业水利工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人力资源管理",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "农林经济管理",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "审计学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工程造价",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "风景园林",
          "num": 4,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "建筑学",
          "num": 4,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "英语",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2026": {
      "totalPlan": 45,
      "majors": [
        {
          "name": "食品科学与工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人力资源管理",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "农林经济管理",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "审计学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工程造价",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "草坪科学与工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "林学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "动物科学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "农业资源与环境",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "湖南师范大学": {
    "2021": {
      "totalPlan": 24,
      "majors": [
        {
          "name": "经济学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化工与制药类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 3,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "旅游管理类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "知识产权",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "外国语言文学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "新闻传播学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "地理科学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学/地理(2选1)"
        },
        {
          "name": "地理信息科学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学/地理(2选1)"
        },
        {
          "name": "应用心理学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 44,
      "majors": [
        {
          "name": "化工与制药类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 6,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "经济学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "新闻传播学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "通信工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息科学与技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机科学与技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 45,
      "majors": [
        {
          "name": "化工与制药类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "临床医学",
          "num": 6,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "人工智能",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "新闻传播学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "电子信息科学与技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "药学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "信息与计算科学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 65,
      "majors": [
        {
          "name": "临床医学",
          "num": 10,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化工与制药类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息科学与技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "康复治疗学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "通信工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 65,
      "majors": [
        {
          "name": "临床医学",
          "num": 12,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学工程与工艺",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息科学与技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "外国语言文学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "制药工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 65,
      "majors": [
        {
          "name": "临床医学",
          "num": 12,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学工程与工艺",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息科学与技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "暨南大学": {
    "2021": {
      "totalPlan": 40,
      "majors": [
        {
          "name": "物联网工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济统计学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学与应用数学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "信息与计算科学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工程力学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子科学与技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "光电信息科学与工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "网络空间安全",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子商务",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 35,
      "majors": [
        {
          "name": "物联网工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济统计学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学与应用数学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "信息与计算科学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济统计学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生态学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "工程力学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子科学与技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 33,
      "majors": [
        {
          "name": "物联网工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学与应用数学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济统计学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生态学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "工程力学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子科学与技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "光电信息科学与工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机科学与技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 32,
      "majors": [
        {
          "name": "物联网工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "网络空间安全",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "应用物理学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "应用化学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生态学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工程力学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "光电信息科学与工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "环境科学与工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物医学工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 32,
      "majors": [
        {
          "name": "包装工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工程力学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济统计学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子商务",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "应急管理",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济统计学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "信息与计算科学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学与应用数学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物医学工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 31,
      "majors": [
        {
          "name": "包装工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "信息与计算科学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学与应用数学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济统计学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "低空技术与工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "应急管理",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "中药学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物医学工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "环境科学与工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "华南师范大学": {
    "2021": {
      "totalPlan": 27,
      "majors": [
        {
          "name": "物理学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机科学与技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学与应用数学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "心理学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "网络工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 27,
      "majors": [
        {
          "name": "物理学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学与应用数学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "心理学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机科学与技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "小学教育",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "网络工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 27,
      "majors": [
        {
          "name": "物理学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学与应用数学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "心理学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机科学与技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "小学教育",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "网络工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 37,
      "majors": [
        {
          "name": "数学与应用数学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "管理科学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机科学与技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "网络工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "心理学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "人力资源管理",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2025": {
      "totalPlan": 37,
      "majors": [
        {
          "name": "物理学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学与应用数学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "心理学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "网络工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "光电信息科学与工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "科学教育",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2026": {
      "totalPlan": 37,
      "majors": [
        {
          "name": "物理学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学与应用数学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "网络工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "光电信息科学与工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "心理学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "科学教育",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    }
  },
  "天津医科大学": {
    "2021": {
      "totalPlan": 23,
      "majors": [
        {
          "name": "医学技术类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 4,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "临床医学",
          "num": 4,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "护理学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物医学工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "口腔医学",
          "num": 2,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "基础医学",
          "num": 1,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "临床医学",
          "num": 1,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "麻醉学",
          "num": 1,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "眼视光医学",
          "num": 1,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        }
      ]
    },
    "2022": {
      "totalPlan": 23,
      "majors": [
        {
          "name": "医学技术类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 4,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "临床医学",
          "num": 4,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "生物医学工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "口腔医学",
          "num": 2,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "护理学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "基础医学",
          "num": 1,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "临床医学",
          "num": 1,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "麻醉学",
          "num": 1,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "眼视光医学",
          "num": 1,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        }
      ]
    },
    "2023": {
      "totalPlan": 24,
      "majors": [
        {
          "name": "临床医学",
          "num": 4,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "临床医学",
          "num": 4,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "口腔医学",
          "num": 3,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "医学技术类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物医学工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "基础医学",
          "num": 2,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "临床医学",
          "num": 2,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "护理学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "临床医学",
          "num": 1,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "麻醉学",
          "num": 1,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        }
      ]
    },
    "2024": {
      "totalPlan": 26,
      "majors": [
        {
          "name": "临床医学",
          "num": 4,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "临床医学",
          "num": 4,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "口腔医学",
          "num": 3,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "医学技术类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "生物医学工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "预防医学",
          "num": 2,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "预防医学",
          "num": 2,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床药学",
          "num": 2,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "护理学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 29,
      "majors": [
        {
          "name": "临床医学",
          "num": 6,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "医学检验技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "临床医学",
          "num": 4,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "口腔医学",
          "num": 3,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "医学影像技术",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "医学影像技术",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "医学检验技术",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "临床医学",
          "num": 2,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "基础医学",
          "num": 2,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "护理学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 25,
      "majors": [
        {
          "name": "临床医学",
          "num": 4,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "临床医学",
          "num": 4,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科���选)"
        },
        {
          "name": "口腔医学",
          "num": 3,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "护理学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "医学影像技术",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "医学影像技术",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "医学检验技术",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "医学检验技术",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "药学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "预防医学",
          "num": 2,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "大连海事大学": {
    "2021": {
      "totalPlan": 131,
      "majors": [
        {
          "name": "计算机类",
          "num": 30,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "交通运输类",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "管理科学与工程类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "海事管理",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 131,
      "majors": [
        {
          "name": "计算机类",
          "num": 30,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "交通运输类",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "管理科学与工程类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "海事管理",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 124,
      "majors": [
        {
          "name": "计算机类",
          "num": 23,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "交通运输类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "管理科学与工程类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "海事管理",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "轮机工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 127,
      "majors": [
        {
          "name": "自动化类",
          "num": 24,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 24,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "交通运输类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "交通管理",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "管理科学与工程类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "轮机工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 127,
      "majors": [
        {
          "name": "计算机类",
          "num": 24,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 24,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "交通运输类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "交通管理",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "管理科学与工程类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "轮机工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 125,
      "majors": [
        {
          "name": "计算机类",
          "num": 25,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 23,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "交通运输类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "管理科学与工程类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "船舶与海洋工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "轮机工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "辽宁大学": {
    "2021": {
      "totalPlan": 42,
      "majors": [
        {
          "name": "化学类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工程管理",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "环境工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "国际经济与贸易",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "会计学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 38,
      "majors": [
        {
          "name": "化学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "环境工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "工程管理",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "微电子科学与工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "会计学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "广播电视编导",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 39,
      "majors": [
        {
          "name": "化学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "纪检监察",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "环境工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "工程管理",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "微电子科学与工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "会计学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 44,
      "majors": [
        {
          "name": "化学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "金融学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息科学与技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "网络空间安全",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "环境工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济统计学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2025": {
      "totalPlan": 55,
      "majors": [
        {
          "name": "金融学",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机科学与技术",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数字经济",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济统计学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "国际经济与贸易",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工程力学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工程管理",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2026": {
      "totalPlan": 60,
      "majors": [
        {
          "name": "金融学",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机科学与技术",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "金融学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数字经济",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "会计学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济统计学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "会计学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    }
  },
  "东北师范大学": {
    "2021": {
      "totalPlan": 78,
      "majors": [
        {
          "name": "计算机类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "地理科学类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "心理学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "教育学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "商务英语",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数字媒体技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学与应用数学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2022": {
      "totalPlan": 74,
      "majors": [
        {
          "name": "计算机类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "地理科学类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "教育学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "经济学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "心理学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "商务英语",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 72,
      "majors": [
        {
          "name": "计算机类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "地理科学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "心理学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "环境科学与工程类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "教育学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 46,
      "majors": [
        {
          "name": "计算机类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "地理科学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "环境科学与工程类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数字媒体技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2025": {
      "totalPlan": 56,
      "majors": [
        {
          "name": "计算机类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "环境科学与工程类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物流管理",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "地理科学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "金融学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "心理学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2026": {
      "totalPlan": 56,
      "majors": [
        {
          "name": "计算机类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物流管理",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "环境科学与工程类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "地理科学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "金融学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "心理学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "英语",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    }
  },
  "延边大学": {
    "2021": {
      "totalPlan": 43,
      "majors": [
        {
          "name": "药学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "高分子材料与工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "通信工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品科学与工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "地理科学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选地理"
        },
        {
          "name": "人工智能",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 46,
      "majors": [
        {
          "name": "药学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "高分子材料与工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "护理学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "通信工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "人工智能",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物流管理",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 51,
      "majors": [
        {
          "name": "人工智能",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "高分子材料与工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "通信工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "护理学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "食品科学与工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        }
      ]
    },
    "2024": {
      "totalPlan": 51,
      "majors": [
        {
          "name": "护理学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选生物"
        },
        {
          "name": "物理学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "高分子材料与工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "通信工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "土木工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品科学与工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 59,
      "majors": [
        {
          "name": "护理学",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选生物"
        },
        {
          "name": "数学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品科学与工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "通信工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "高分子材料与工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品科学与工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "土木工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 65,
      "majors": [
        {
          "name": "护理学",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选生物"
        },
        {
          "name": "化学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品科学与工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "通信工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品科学与工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "高分子材料与工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "土木工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "东北林业大学": {
    "2021": {
      "totalPlan": 103,
      "majors": [
        {
          "name": "工程管理",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物技术",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "化学",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机科学与技术",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "机械类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 104,
      "majors": [
        {
          "name": "生物技术",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "工程管理",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "土木工程",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机科学与技术",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "机械类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 108,
      "majors": [
        {
          "name": "生物技术",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "工程管理",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机科学与技术",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "电子信息类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 107,
      "majors": [
        {
          "name": "生物技术",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工程管理",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工商管理类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2025": {
      "totalPlan": 108,
      "majors": [
        {
          "name": "工程管理",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物技术",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工商管理类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机科学与技术",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2026": {
      "totalPlan": 98,
      "majors": [
        {
          "name": "计算机类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工程管理",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物技术",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学与应用数学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "郑州大学": {
    "2021": {
      "totalPlan": 128,
      "majors": [
        {
          "name": "自动化类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "管理科学与工程类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "临床医学类",
          "num": 12,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "水利类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 128,
      "majors": [
        {
          "name": "自动化类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "临床医学类",
          "num": 12,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "管理科学与工程类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2023": {
      "totalPlan": 121,
      "majors": [
        {
          "name": "机械类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "水利类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "管理科学与工程类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2024": {
      "totalPlan": 122,
      "majors": [
        {
          "name": "物理学类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "信息安全",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "水利类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "管理科学与工程类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2025": {
      "totalPlan": 135,
      "majors": [
        {
          "name": "水利类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化工与制药类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工业工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2026": {
      "totalPlan": 151,
      "majors": [
        {
          "name": "材料类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械工程",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "水利类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子科学与技术",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药学",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "通信工程",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化工与制药类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "河北工业大学": {
    "2021": {
      "totalPlan": 1796,
      "majors": [
        {
          "name": "机械类",
          "num": 348,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气工程及其自动化",
          "num": 239,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 228,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木类",
          "num": 218,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 197,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化工与制药类",
          "num": 162,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 106,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源动力类",
          "num": 101,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "环境科学与工程类",
          "num": 101,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "测控技术与仪器",
          "num": 96,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 1462,
      "majors": [
        {
          "name": "电气工程及其自动化",
          "num": 234,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 230,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 225,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 197,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源动力类",
          "num": 103,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 102,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "测控技术与仪器",
          "num": 96,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子科学与技术",
          "num": 93,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料成型及控制工程",
          "num": 91,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化",
          "num": 91,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 1244,
      "majors": [
        {
          "name": "材料类",
          "num": 239,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气工程及其自动化",
          "num": 236,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 113,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物联网工程",
          "num": 108,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 101,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料成型及控制工程",
          "num": 96,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子科学与技术",
          "num": 93,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木工程",
          "num": 90,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息工程",
          "num": 88,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "车辆工程",
          "num": 80,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 1150,
      "majors": [
        {
          "name": "电气工程及其自动化",
          "num": 248,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 130,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "无机非金属材料工程",
          "num": 121,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物联网工程",
          "num": 108,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 99,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械电子工程",
          "num": 90,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子科学与技术",
          "num": 90,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "车辆工程",
          "num": 89,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "测控技术与仪器",
          "num": 89,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料成型及控制工程",
          "num": 86,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 1314,
      "majors": [
        {
          "name": "电气工程及其自动化",
          "num": 231,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 179,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "交通工程",
          "num": 142,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物联网工程",
          "num": 137,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 123,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学工程与工艺",
          "num": 122,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "储能科学与工程",
          "num": 108,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "新能源科学与工程",
          "num": 93,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子科学与技术",
          "num": 90,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化",
          "num": 89,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 1437,
      "majors": [
        {
          "name": "电气工程及其自动化",
          "num": 278,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 173,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "交通工程",
          "num": 160,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "储能科学与工程",
          "num": 140,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物联网工程",
          "num": 137,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息工程",
          "num": 134,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "能源与动力工程",
          "num": 119,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 104,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学工程与工艺",
          "num": 98,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "新能源科学与工程",
          "num": 94,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "太原理工大学": {
    "2021": {
      "totalPlan": 79,
      "majors": [
        {
          "name": "机械设计制造及其自动化",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料科学与工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料成型及控制工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械电子工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "测绘工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "资源勘查工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "飞行器设计与工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2022": {
      "totalPlan": 72,
      "majors": [
        {
          "name": "电气工程及其自动化",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料成型及控制工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械电子工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学工程与工艺",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "应急技术与管理",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "车辆工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "测绘工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "制药工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        }
      ]
    },
    "2023": {
      "totalPlan": 75,
      "majors": [
        {
          "name": "电气工程及其自动化",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料成型及控制工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械电子工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料科学与工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学工程与工艺",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "安全工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "车辆工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "光电信息科学与工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2024": {
      "totalPlan": 77,
      "majors": [
        {
          "name": "电气工程及其自动化",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料成型及控制工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械电子工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料科学与工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "土木工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学工程与工艺",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "安全工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "车辆工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "光电信息科学与工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 81,
      "majors": [
        {
          "name": "电气工程及其自动化",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "安全工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "飞行器设计与工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学工程与工艺",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "土木工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "集成电路设计与集成系统",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料科学与工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械电子工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料成型及控制工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 87,
      "majors": [
        {
          "name": "软件工程",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "安全工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "飞行器设计与工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学工程与工艺",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机器人工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "集成电路设计与集成系统",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料科学与工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "内蒙古大学": {
    "2021": {
      "totalPlan": 26,
      "majors": [
        {
          "name": "土木工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工商管理",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "生态学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "道路桥梁与渡河工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数理基础科学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子科学与技术",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机科学与技术",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 37,
      "majors": [
        {
          "name": "机械工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "土木工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "车辆工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物流管理",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "道路桥梁与渡河工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "交通运输",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2023": {
      "totalPlan": 37,
      "majors": [
        {
          "name": "机械工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "土木工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "车辆工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物流管理",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "电子信息类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "道路桥梁与渡河工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2024": {
      "totalPlan": 48,
      "majors": [
        {
          "name": "机械工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "土木工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "车辆工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "交通运输",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工程管理",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物流管理",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "应用化学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 54,
      "majors": [
        {
          "name": "电子信息类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能建造",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "土木工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物流管理",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "交通运输",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "会计学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学工程与工艺",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子科学与技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "车辆工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 51,
      "majors": [
        {
          "name": "土木工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能建造",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物流管理",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "交通运输",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学与应用数学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学工程与工艺",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息科学与技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "通信工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "合肥工业大学": {
    "2021": {
      "totalPlan": 135,
      "majors": [
        {
          "name": "土木类",
          "num": 25,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "仪器类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气工程及其自动化",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "食品科学与工程类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "国际经济与贸易",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "车辆工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "集成电路设计与集成系统",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 111,
      "majors": [
        {
          "name": "机械类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "仪器类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "食品科学与工程类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "电气工程及其自动化",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "国际经济与贸易",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "集成电路设计与集成系统",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "车辆工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 151,
      "majors": [
        {
          "name": "机械类",
          "num": 32,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "仪器类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气工程及其自动化",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息工程",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "微电子科学与工程",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学与应用数学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机器人工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 90,
      "majors": [
        {
          "name": "机械设计制造及其自动化",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息材料",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "无机非金属材料工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料成型及控制工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "信息与计算科学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "应用物理学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 84,
      "majors": [
        {
          "name": "机械设计制造及其自动化",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息材料",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "信息安全",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "无机非金属材料工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料物理",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料科学与工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 88,
      "majors": [
        {
          "name": "机械设计制造及其自动化",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "信息安全",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "微电子科学与工程",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息工程",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息材料",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料科学与工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能制造工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "安徽大学": {
    "2021": {
      "totalPlan": 60,
      "majors": [
        {
          "name": "自动化类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "人工智能",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机器人工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济统计学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "信息安全",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 57,
      "majors": [
        {
          "name": "计算机类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机科学与技术",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气工程及其自动化",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "人工智能",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机器人工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济统计学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "信息安全",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 52,
      "majors": [
        {
          "name": "人工智能",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机器人工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机科学与技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "信息安全",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济统计学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气工程及其自动化",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 57,
      "majors": [
        {
          "name": "数学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机器人工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "信息安全",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能科学与技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "网络空间安全",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "微电子科学与工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 68,
      "majors": [
        {
          "name": "人工智能",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "网络空间安全",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机器人工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "微电子科学与工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能科学与技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "信息安全",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 81,
      "majors": [
        {
          "name": "机器人工程",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能科学与技术",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "微电子科学与工程",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "网络空间安全",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "信息安全",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "大数据管理与应用",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "福州大学": {
    "2021": {
      "totalPlan": 26,
      "majors": [
        {
          "name": "土木工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "港口航道与海岸工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工业设计",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "过程装备与控制工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "光电信息科学与工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "集成电路设计与集成系统",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 25,
      "majors": [
        {
          "name": "土木工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "港口航道与海岸工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "德语",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工业设计",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "过程装备与控制工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料科学与工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2023": {
      "totalPlan": 35,
      "majors": [
        {
          "name": "过程装备与控制工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "集成电路设计与集成系统",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不��"
        },
        {
          "name": "土木工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学工程与工艺",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "信息管理与信息系统",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 36,
      "majors": [
        {
          "name": "过程装备与控制工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "集成电路设计与集成系统",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "土木工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学工程与工艺",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "信息管理与信息系统",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子科学与技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 36,
      "majors": [
        {
          "name": "信息管理与信息系统",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学工程与工艺",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "土木工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "集成电路设计与集成系统",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "过程装备与控制工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "风景园林",
          "num": 3,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "食品科学与工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "环境工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 43,
      "majors": [
        {
          "name": "机械设计制造及其自动化",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机器人工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物流管理",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "信息管理与信息系统",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "风景园林",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "食品科学与工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "环境工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "交通工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学工程与工艺",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "南昌大学": {
    "2021": {
      "totalPlan": 66,
      "majors": [
        {
          "name": "临床医学",
          "num": 15,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "计算机类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "管理科学与工程类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工程力学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "麻醉学",
          "num": 5,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "金融数学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 73,
      "majors": [
        {
          "name": "临床医学",
          "num": 16,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "计算机类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "护理学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "管理科学与工程类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "工程力学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "麻醉学",
          "num": 5,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        }
      ]
    },
    "2023": {
      "totalPlan": 71,
      "majors": [
        {
          "name": "临床医学",
          "num": 15,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "计算机类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "预防医学",
          "num": 6,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "管理科学与工程类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工程力学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 59,
      "majors": [
        {
          "name": "临床医学",
          "num": 10,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "预防医学",
          "num": 6,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工程力学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料科学与工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数据科学与大数据技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "土木工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "麻醉学",
          "num": 5,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床药学",
          "num": 5,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 59,
      "majors": [
        {
          "name": "临床医学",
          "num": 10,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "预防医学",
          "num": 6,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "护理学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选生物"
        },
        {
          "name": "临床药学",
          "num": 5,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "基础医学",
          "num": 5,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品科学与工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "土木工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数据科学与大数据技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 71,
      "majors": [
        {
          "name": "临床医学",
          "num": 14,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品科学与工程",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料科学与工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "管理科学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床药学",
          "num": 5,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "预防医学",
          "num": 5,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "海南大学": {
    "2021": {
      "totalPlan": 43,
      "majors": [
        {
          "name": "酒店管理",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "会展经济与管理",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "人文地理与城乡规划",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学/地理(2选1)"
        },
        {
          "name": "行政管理",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "旅游管理类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "植物保护",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "水产养殖学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "金融学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "国际经济与贸易",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 36,
      "majors": [
        {
          "name": "数据科学与大数据技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物医学工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品科学与工程类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "应用物理学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "车辆工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "人工智能",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 43,
      "majors": [
        {
          "name": "电子信息类",
          "num": 7,
          "length": "4",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "智能科学与技术",
          "num": 6,
          "length": "4",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "应用化学",
          "num": 4,
          "length": "4",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物医学工程",
          "num": 4,
          "length": "4",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数据科学与大数据技术",
          "num": 4,
          "length": "4",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木工程",
          "num": 4,
          "length": "4",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学工程与工艺",
          "num": 4,
          "length": "4",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "食品科学与工程类",
          "num": 4,
          "length": "4",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "应用物理学",
          "num": 3,
          "length": "4",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学",
          "num": 3,
          "length": "4",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        }
      ]
    },
    "2024": {
      "totalPlan": 47,
      "majors": [
        {
          "name": "电子科学与技术",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能科学与技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数据科学与大数据技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "土木工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物医学工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品科学与工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "应用物理学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "应用化学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 60,
      "majors": [
        {
          "name": "软件工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子科学与技术",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能科学与技术",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子商务",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "海洋科学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料科学与工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生态学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "应用物理学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "动物科学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "植物保护",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 58,
      "majors": [
        {
          "name": "智能科学与技术",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "应用物理学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子科学与技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "海洋科学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子商务",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "食品科学与工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料科学与工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物医学工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "西南大学": {
    "2021": {
      "totalPlan": 56,
      "majors": [
        {
          "name": "植物生产类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "计算机科学与技术",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "动物科学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "智能科学与技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "植物科学与技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "电子信息类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 55,
      "majors": [
        {
          "name": "植物生产类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "计算机科学与技术",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "动物科学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "机械类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "植物科学与技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "电子信息类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "制药工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自然保护与环境生态类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        }
      ]
    },
    "2023": {
      "totalPlan": 55,
      "majors": [
        {
          "name": "植物生产类",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "计算机科学与技术",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "药学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "动物科学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "植物科学与技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "制药工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自然保护与环境生态类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "数学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 52,
      "majors": [
        {
          "name": "软件工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "植物科学与技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "动物科学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "植物生产类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自然保护与环境生态类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "网络工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 52,
      "majors": [
        {
          "name": "软件工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "药学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "植物科学与技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "植物生产类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "动物科学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "水产类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自然保护与环境生态类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 45,
      "majors": [
        {
          "name": "药学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "植物科学与技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "动物科学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "心理学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "水产类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "动物医学类",
          "num": 3,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "贵州大学": {
    "2021": {
      "totalPlan": 47,
      "majors": [
        {
          "name": "旅游管理",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "信息管理与信息系统",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化工与制药类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料成型及控制工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 51,
      "majors": [
        {
          "name": "旅游管理",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学工程与工艺",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "电气类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 45,
      "majors": [
        {
          "name": "旅游管理",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学工程与工艺",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工商管理类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "环境科学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2024": {
      "totalPlan": 47,
      "majors": [
        {
          "name": "旅游管理",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学工程与工艺",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "土木类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "环境科学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "建筑类",
          "num": 4,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2025": {
      "totalPlan": 49,
      "majors": [
        {
          "name": "机械设计制造及其自动化",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "旅游管理",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学工程与工艺",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "信息管理与信息系统",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "环境科学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "土木类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 49,
      "majors": [
        {
          "name": "信息管理与信息系统",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "旅游管理",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学工程与工艺",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "环境科学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息科学与技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "环境工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学工程与工艺",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "水文与水资源工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "西藏大学": {
    "2021": {
      "totalPlan": 28,
      "majors": [
        {
          "name": "地理科学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学/地理(2选1)"
        },
        {
          "name": "临床医学",
          "num": 4,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "资源勘查工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学与应用数学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "地理信息科学",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选地理"
        },
        {
          "name": "通信工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "信息工程",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机科学与技术",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 34,
      "majors": [
        {
          "name": "计算机科学与技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 4,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "护理学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "经济学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学与应用数学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "通信工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "资源勘查工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 38,
      "majors": [
        {
          "name": "经济学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "临床医学",
          "num": 5,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "金融学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机科学与技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "护理学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "会计学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "财政学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学与应用数学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2024": {
      "totalPlan": 38,
      "majors": [
        {
          "name": "计算机科学与技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "护理学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "土木工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "资源勘查工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 4,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "建筑学",
          "num": 4,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学与应用数学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "通信工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "交通运输",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "地理科学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选地理"
        }
      ]
    },
    "2025": {
      "totalPlan": 41,
      "majors": [
        {
          "name": "计算机科学与技术",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 5,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "护理学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "预防医学",
          "num": 4,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "通信工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学与应用数学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "会计学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生态学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        }
      ]
    },
    "2026": {
      "totalPlan": 44,
      "majors": [
        {
          "name": "计算机科学与技术",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 5,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "城乡规划",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "护理学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "预防医学",
          "num": 4,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "交通运输",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "土木工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学与应用数学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "会计学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    }
  },
  "青海大学": {
    "2021": {
      "totalPlan": 44,
      "majors": [
        {
          "name": "计算机科学与技术",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "水利水电工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气工程及其自动化",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "临床医学",
          "num": 4,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "新能源材料与器件",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "测绘工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "资源勘查工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 43,
      "majors": [
        {
          "name": "计算机科学与技术",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "水利水电工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气工程及其自动化",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化工与制药类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 4,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "生物技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "新能源材料与器件",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "给排水科学与工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "测绘工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 45,
      "majors": [
        {
          "name": "计算机科学与技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "水利水电工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气工程及其自动化",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化工与制药类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 4,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "生物技术",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "新能源材料与器件",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "测绘工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 57,
      "majors": [
        {
          "name": "水利水电工程",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料科学与工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械设计制造及其自动化",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工商管理类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生态学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "新能源材料与器件",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "土木工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 52,
      "majors": [
        {
          "name": "水利水电工程",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "土木工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机��学与技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 5,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "环境生态工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "环境科学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料科学与工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "草业科学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 53,
      "majors": [
        {
          "name": "水利水电工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "土木工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 5,
          "length": "五年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "环境生态工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学工程与工艺",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料科学与工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "护理学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        }
      ]
    }
  },
  "宁夏大学": {
    "2021": {
      "totalPlan": 37,
      "majors": [
        {
          "name": "葡萄与葡萄酒工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "计算机类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "学前教育",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "食品科学与工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "建筑类",
          "num": 3,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "动物医学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "林学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料化学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2022": {
      "totalPlan": 39,
      "majors": [
        {
          "name": "葡萄与葡萄酒工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "电子信息类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "软件工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "教育技术学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "学前教育",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学与应用数学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        }
      ]
    },
    "2023": {
      "totalPlan": 42,
      "majors": [
        {
          "name": "葡萄与葡萄酒工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "机械工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学工程与工艺",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "教育技术学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "学前教育",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学与应用数学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械工程",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "新能源材料与器件",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 45,
      "majors": [
        {
          "name": "葡萄与葡萄酒工程",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "土木工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学工程与工艺",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "教育技术学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "建筑学",
          "num": 4,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学与应用数学",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 68,
      "majors": [
        {
          "name": "化学工程与工艺",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品科学与工程",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "葡萄与葡萄酒工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "农学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学与应用数学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 57,
      "majors": [
        {
          "name": "化学工程与工艺",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 7,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "农学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品科学与工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "葡萄与葡萄酒工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学与应用数学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "新疆大学": {
    "2021": {
      "totalPlan": 79,
      "majors": [
        {
          "name": "软件工程",
          "num": 29,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机科学与技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "信息安全",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "过程装备与控制工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "高分子材料与工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品科学与工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "经济学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "英语",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 81,
      "majors": [
        {
          "name": "软件工程",
          "num": 32,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "过程装备与控制工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "高分子材料与工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "食品科学与工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "经济学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学与应用数学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        }
      ]
    },
    "2023": {
      "totalPlan": 72,
      "majors": [
        {
          "name": "软件工程",
          "num": 32,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学与应用数学",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "过程装备与控制工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "高分子材料与工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "资源勘查工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "金融学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "英语",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        }
      ]
    },
    "2024": {
      "totalPlan": 71,
      "majors": [
        {
          "name": "软件工程",
          "num": 32,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "过程装备与控制工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "高分子材料与工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "资源勘查工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学与应用数学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "能源与动力工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息工程",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机科学与技术",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 75,
      "majors": [
        {
          "name": "软件工程",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械工程",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学工程与工艺",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工程管理",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "食品科学与工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "纺织工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "地质工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "土木工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "网络空间安全",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 78,
      "majors": [
        {
          "name": "软件工程",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品科学与工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "资源环境大数据工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "纺织工程",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工程管理",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "智慧农业",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智慧交通",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智能采矿工程",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "石河子大学": {
    "2021": {
      "totalPlan": 100,
      "majors": [
        {
          "name": "计算机类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "动物医学",
          "num": 12,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "生物科学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "机械类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化工与制药类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品科学与工程类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "临床医学",
          "num": 10,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "教育技术学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "植物生产类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        }
      ]
    },
    "2022": {
      "totalPlan": 94,
      "majors": [
        {
          "name": "植物生产类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "生物科学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "食品科学与工程类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "动物科学",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "动物医学",
          "num": 10,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "临床医学",
          "num": 10,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "经济学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "农业资源与环境",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "信息与计算科学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "应用物理学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 109,
      "majors": [
        {
          "name": "植物生产类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "动物医学",
          "num": 15,
          "length": "五年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "食品科学与工程类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "经济学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "计算机类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "农业资源与环境",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "动物科学",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "应用物理学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 103,
      "majors": [
        {
          "name": "动物医学",
          "num": 15,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "植物生产类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品科学与工程类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "农业资源与环境",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "动物科学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 8,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "信息与计算科学",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 100,
      "majors": [
        {
          "name": "食品科学与工程类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "动物医学",
          "num": 12,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济学类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "临床医学",
          "num": 10,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "智慧水利",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学、生物(2科必选)"
        },
        {
          "name": "动物科学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "农业资源与环境",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "植物生产类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 100,
      "majors": [
        {
          "name": "动物医学",
          "num": 12,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品科学与工程类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "软件工程",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "临床医学",
          "num": 10,
          "length": "五年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "植物生产类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "农林经济管理",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "护理学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "动物科学",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "农业资源与环境",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "中国矿业大学": {
    "2021": {
      "totalPlan": 180,
      "majors": [
        {
          "name": "计算机类",
          "num": 30,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 26,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 25,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源动力类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "人工智能",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "地质类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "土木类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "安全科学与工程类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2022": {
      "totalPlan": 174,
      "majors": [
        {
          "name": "计算机类",
          "num": 30,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 26,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 24,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源动力类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "人工智能",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "安全科学与工程类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "建筑类",
          "num": 9,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机器人工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 171,
      "majors": [
        {
          "name": "计算机类",
          "num": 28,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 26,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 24,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电气工程及其自动化",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "能源动力类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "人工智能",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "安全科学与工程类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "测绘类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学/地理(2选1)"
        },
        {
          "name": "机器人工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 165,
      "majors": [
        {
          "name": "计算机类",
          "num": 28,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 26,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "能源动力类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "测绘类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "安全科学与工程类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机器人工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 169,
      "majors": [
        {
          "name": "计算机类",
          "num": 28,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 23,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "能源动力类",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息工程",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "安全科学与工程类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "测绘类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 173,
      "majors": [
        {
          "name": "计算机类",
          "num": 28,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电气工程及其自动化",
          "num": 24,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "能源动力类",
          "num": 22,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 21,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 17,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息工程",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机器人工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "土木工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "长安大学": {
    "2021": {
      "totalPlan": 153,
      "majors": [
        {
          "name": "机械类",
          "num": 28,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "土木类",
          "num": 26,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 16,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工科试验班",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "建筑类",
          "num": 11,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "道路桥梁与渡河工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "车辆工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2022": {
      "totalPlan": 148,
      "majors": [
        {
          "name": "土木类",
          "num": 26,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 25,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "工科试验班",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 15,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "建筑类",
          "num": 11,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "道路桥梁与渡河工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "车辆工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "道路桥梁与渡河工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2023": {
      "totalPlan": 137,
      "majors": [
        {
          "name": "土木类",
          "num": 27,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "机械类",
          "num": 24,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 13,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "道路桥梁与渡河工程",
          "num": 11,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "电子信息类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "自动化类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "建筑类",
          "num": 10,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "车辆工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "道路桥梁与渡河工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 128,
      "majors": [
        {
          "name": "土木类",
          "num": 25,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "道路桥梁与渡河工程",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "建筑类",
          "num": 10,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "车辆工程",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "地质工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2025": {
      "totalPlan": 126,
      "majors": [
        {
          "name": "水利类",
          "num": 29,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "机械类",
          "num": 18,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 12,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "建筑类",
          "num": 10,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "道路桥梁与渡河工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "车辆工程",
          "num": 9,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "交通运输",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "道路桥梁与渡河工程",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "人工智能",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 155,
      "majors": [
        {
          "name": "机械类",
          "num": 28,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 24,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "水利类",
          "num": 20,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "车辆工程",
          "num": 19,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "自动化类",
          "num": 14,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "建筑类",
          "num": 10,
          "length": "五年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "交通工程",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "交通运输",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "测绘类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "电子信息类",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  },
  "陕西师范大学": {
    "2021": {
      "totalPlan": 31,
      "majors": [
        {
          "name": "地理科学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选地理"
        },
        {
          "name": "计算机类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "材料类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "食品科学与工程类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2022": {
      "totalPlan": 23,
      "majors": [
        {
          "name": "计算机类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "食品科学与工程类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "数学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "心理学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选生物"
        },
        {
          "name": "材料类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2023": {
      "totalPlan": 28,
      "majors": [
        {
          "name": "数学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "计算机类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "心理学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选生物"
        },
        {
          "name": "食品科学与工程类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "经济学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "物理学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "化学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "生物科学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学/生物(2选1)"
        },
        {
          "name": "材料类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2024": {
      "totalPlan": 32,
      "majors": [
        {
          "name": "数学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "心理学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选生物"
        },
        {
          "name": "生物科学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "材料类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "地理科学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选地理"
        },
        {
          "name": "经济学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "工商管理类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        }
      ]
    },
    "2025": {
      "totalPlan": 48,
      "majors": [
        {
          "name": "电子信息科学与技术",
          "num": 10,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 8,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "化学类",
          "num": 6,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "地理科学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选地理"
        },
        {
          "name": "数学类",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "心理学类",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选生物"
        },
        {
          "name": "经济学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "生物科学类",
          "num": 3,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "大数据管理与应用",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    },
    "2026": {
      "totalPlan": 24,
      "majors": [
        {
          "name": "电子信息科学与技术",
          "num": 5,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "物理学",
          "num": 4,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "食品科学与工程类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "计算机类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "心理学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选生物"
        },
        {
          "name": "地理科学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选地理"
        },
        {
          "name": "物理学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "数学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        },
        {
          "name": "经济学类",
          "num": 2,
          "length": "四年",
          "xuanke": "首选物理，再选不限"
        },
        {
          "name": "材料类",
          "num": 1,
          "length": "四年",
          "xuanke": "首选物理，再选化学"
        }
      ]
    }
  }
};

export function getEnrollmentUniversities(): string[] {
  return Object.keys(enrollmentPlanData);
}

export function getEnrollmentByUniversity(university: string): EnrollmentPlan | undefined {
  return enrollmentPlanData[university];
}

export function getEnrollmentByYear(university: string, year: number): YearPlan | undefined {
  return enrollmentPlanData[university]?.[String(year)];
}

export function getMajorPlans(university: string, year: number): MajorPlan[] {
  return enrollmentPlanData[university]?.[String(year)]?.majors || [];
}
