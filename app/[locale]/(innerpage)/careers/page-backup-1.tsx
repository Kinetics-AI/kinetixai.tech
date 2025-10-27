'use client';
import { useState } from 'react';
import {useTranslations} from "next-intl";
import Link from "next/link"



import { FadeIn } from "@/components/animation/fade-in"
import { FadeInUp } from "@/components/animation/fade-in-up"


// import Select from 'react-select'
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

import { getLocalizedJobs, getFilterOptions } from "@/data/careers"




export default function CareersPage() {
    
    const t = useTranslations('Careers');
    const localizedJobs = getLocalizedJobs(t);
    const filterOptions = getFilterOptions(t);

    // 筛选状态
    const [filters, setFilters] = useState({
        department: t('allDepartments'),
        location: t('allLocations'),
        workType: t('allWorkTypes')
    });

    // 筛选选项
    const { departments, locations, workTypes } = filterOptions;
    const departmentOptions = departments.map(dept => ({
        value: dept,
        label: dept,
    }));
    const locationOptions = locations.map(location => ({
        value: location,
        label: location,
    }));
    const workTypeOptions = workTypes.map(type => ({
        value: type,
        label: type,
    }));


    // 处理筛选变化
    const handleFilterChange = (filterType, value) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: value
        }));
    };

    // 筛选职位
    const filteredJobs = localizedJobs.filter(job => {
        return (
            (filters.department === t('allDepartments') || job.department === filters.department) &&
            (filters.location === t('allLocations') || job.location === filters.location) &&
            (filters.workType === t('allWorkTypes') || job.workType === filters.workType)
        );
    });

    // 按类别分组
    const categorizedJobs = filteredJobs.reduce((acc, job) => {
        if (!acc[job.category]) {
            acc[job.category] = [];
        }
        acc[job.category].push(job);
        return acc;
    }, {});

    console.log(categorizedJobs)

    return (
        <div className="inner-s1">
            <div className="wrap-s">
                <div className="innerblock">
                    <FadeInUp className="label">
                        {t("allpositions")} ({filteredJobs.length})
                    </FadeInUp>
                    <FadeInUp className="filter-box" delay={0.1}>
                        <div className="top-box">
                            {t('filterCriteria')}：
                        </div>
                        <div className="bot-box">
                            <div className="box">
                                <Select
                                    value={departmentOptions.find(option => option.value === filters.department)}
                                    onChange={(selectedOption) => handleFilterChange('department', selectedOption.value)}
                                    options={departmentOptions}
                                    placeholder="{t('departmentsTit')}"
                                    className="selectbox"
                                    classNamePrefix="selectbox"
                                />
                            </div>
                            <div className="box">
                                <Select
                                    value={locationOptions.find(option => option.value === filters.location)}
                                    onChange={(selectedOption) => handleFilterChange('location', selectedOption.value)}
                                    options={locationOptions}
                                    placeholder="{t('locationsTit')}"
                                    className="selectbox"
                                    classNamePrefix="selectbox"
                                />
                            </div>
                            <div className="box">
                                <Select
                                    value={workTypeOptions.find(option => option.value === filters.workType)}
                                    onChange={(selectedOption) => handleFilterChange('workType', selectedOption.value)}
                                    options={workTypeOptions}
                                    placeholder="{t('workTypesTit')}"
                                    className="selectbox"
                                    classNamePrefix="selectbox"
                                />
                            </div>
                        </div>
                    </FadeInUp>
                    {/* 职位列表 */}
                    <FadeInUp className="items-block" delay={0.2}>
                        {Object.entries(categorizedJobs).map(([category, categoryJobs]) => (
                        <div key={category} className="block">
                            <div className="s-label">{category}</div>
                            <div className="items">
                                {categoryJobs.map(job => (
                                    job.url ? (
                                        <Link key={job.title} href={job.url} target='_blank' className="item">
                                            <div className="tit">{job.title}</div>
                                            <div className="info">
                                                <span>• {job.department}</span>
                                                <span>• {job.location}</span>
                                                <span>• {job.workType}</span>
                                                <span>• {job.workMode}</span>
                                            </div>
                                            <div className="more"></div>
                                        </Link>
                                    ) : (
                                        <div key={job.title} className="item">
                                            <div className="tit">{job.title}</div>
                                            <div className="info">
                                                <span>• {job.department}</span>
                                                <span>• {job.location}</span>
                                                <span>• {job.workType}</span>
                                                <span>• {job.workMode}</span>
                                            </div>
                                            <div className="more"></div>
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>
                        ))}
                        {filteredJobs.length === 0 && (
                        <div className="empty-txt">
                            {t('emptyTxt')}
                        </div>
                        )}
                    </FadeInUp>
                </div>
            </div>
        </div>
    );
}