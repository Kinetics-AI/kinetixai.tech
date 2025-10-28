'use client';
import { useState, useMemo, useEffect } from 'react';
import {useTranslations} from "next-intl";
import { useParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import Link from "next/link"



import { FadeIn } from "@/components/animation/fade-in"
import { FadeInInitial } from "@/components/animation/fade-in-up-initial"

// import Select from 'react-select'
// const Select = dynamic(() => import('react-select'), { ssr: false });
const Select = dynamic<{
    value?: SelectOption;
    onChange?: (option: SelectOption | null) => void;
    options: SelectOption[];
    placeholder: string;
    className: string;
    classNamePrefix: string;
}>(() => import('react-select'), { ssr: false });


import { jobData, JobList } from "@/data/careersList";



interface Filters {
    department: string;
    location: string;
    jobType: string;
}

interface SelectOption {
  value: string;
  label: string;
}

export default function JobsPage() {
    
    const t = useTranslations('Careers');    
    const params = useParams();


    const [filters, setFilters] = useState < Filters > ({
        department: '',
        location: '',
        jobType: ''
    });

    // 获取当前语言的数据
    const getJobsByLocale = (): JobList[] => {
        const locale = typeof params.locale === 'string' ? params.locale : 'en';
        return jobData[locale] || jobData.en;
    };
    const jobs = getJobsByLocale();

    // 获取唯一的筛选选项
    const departments = useMemo(() => [...new Set(jobs.map(job => job.category))], [jobs]);
    
    // 拆分组合地点为单独选项
    const locations = useMemo(() => {
        const allLocations = new Set<string>();
        jobs.forEach(job => {
            // 如果地点包含"/"，则拆分为多个地点
            if (job.location.includes('/')) {
                job.location.split('/').forEach(loc => {
                    allLocations.add(loc.trim());
                });
            } else {
                allLocations.add(job.location);
            }
        });
        return Array.from(allLocations);
    }, [jobs]);

    const jobTypes = useMemo(() => [...new Set(jobs.map(job => job.type))], [jobs]);

    // 筛选职位 - 修改地点匹配逻辑以处理拆分后的地点
    const filteredJobs = useMemo(() => {
        return jobs.filter(job => {
            const jobLocations = job.location.includes('/') 
                ? job.location.split('/').map(loc => loc.trim())
                : [job.location];
            
            return (
                (!filters.department || job.category === filters.department) &&
                (!filters.location || jobLocations.includes(filters.location)) &&
                (!filters.jobType || job.type === filters.jobType)
            );
        });
    }, [jobs, filters]);

    // 按部门分组
    const jobsByDepartment = useMemo(() => {
        const grouped: {
            [key: string]: JobList[]
        } = {};
        filteredJobs.forEach(job => {
            if (!grouped[job.category]) {
                grouped[job.category] = [];
            }
            grouped[job.category].push(job);
        });
        return grouped;
    }, [filteredJobs]);
    
    const handleFilterChange = (key: keyof Filters, value: string) => {
        setFilters(prev => ({
            ...prev,
            [key]: value
        }));
    };
    
    // 创建包含"所有"选项的数组
    const departmentOptions = useMemo<SelectOption[]>(() => [
        { value: '', label: t("allDepartments") },
        ...departments.map(dept => ({ value: dept, label: dept }))
    ], [departments, t("allDepartments")]);

    const locationOptions = useMemo<SelectOption[]>(() => [
        { value: '', label: t("allLocations") },
        ...locations.map(location => ({ value: location, label: location }))
    ], [locations, t("allLocations")]);

    const jobTypeOptions = useMemo<SelectOption[]>(() => [
        { value: '', label: t("allWorkTypes") },
        ...jobTypes.map(type => ({ value: type, label: type }))
    ], [jobTypes, t("allWorkTypes")]);

    return (
        <div className="inner-s1">
            <div className="wrap-s">
                <div className="innerblock">
                    <FadeInInitial className="label">
                        {t("allpositions")} ({filteredJobs.length})
                    </FadeInInitial>
                    <FadeInInitial className="filter-box" delay={0.1}>
                        <div className="top-box">
                            {t('filterCriteria')}：
                        </div>
                        <div className="bot-box">
                            <div className="box">
                                <Select
                                    value={departmentOptions.find(option => option.value === filters.department)}                               
                                    onChange={(selectedOption: SelectOption | null) => {
                                        handleFilterChange('department', selectedOption?.value ?? '');
                                    }}
                                    options={departmentOptions}
                                    placeholder={t('departmentsTit')}
                                    className="selectbox"
                                    classNamePrefix="selectbox"
                                />
                            </div>
                            <div className="box">
                                <Select
                                    value={locationOptions.find(option => option.value === filters.location)}                                
                                    onChange={(selectedOption: SelectOption | null) => {
                                        handleFilterChange('location', selectedOption?.value ?? '');
                                    }}
                                    options={locationOptions}
                                    placeholder={t('locationsTit')}
                                    className="selectbox"
                                    classNamePrefix="selectbox"
                                />
                            </div>
                            <div className="box">
                                <Select
                                    value={jobTypeOptions.find(option => option.value === filters.jobType)}                                
                                    onChange={(selectedOption: SelectOption | null) => {
                                        handleFilterChange('jobType', selectedOption?.value ?? '');
                                    }}
                                    options={jobTypeOptions}
                                    placeholder={t('workTypesTit')}
                                    className="selectbox"
                                    classNamePrefix="selectbox"
                                />
                            </div>
                        </div>
                    </FadeInInitial>
                    {/* 职位列表 */}
                    <FadeInInitial className="items-block" delay={0.2}>
                        {Object.entries(jobsByDepartment).map(([department, departmentJobs]) => (
                        <div key={department} className="block">
                            <div className="s-label">{department}</div>
                            <div className="items">
                                {departmentJobs.map((job, index) => (
                                    job.url ? (
                                        <Link key={index} href={job.url} target='_blank' rel="noopener noreferrer" className="item">
                                            <div className="tit">{job.title}</div>
                                            <div className="info">
                                                <span>• {job.category}</span>
                                                <span>• {job.location}</span>
                                                <span>• {job.type}</span>
                                                <span>• {job.workMode}</span>
                                            </div>
                                            <div className="more"></div>
                                        </Link>
                                    ) : (
                                        <div key={index} className="item">
                                            <div className="tit">{job.title}</div>
                                            <div className="info">
                                                <span>• {job.category}</span>
                                                <span>• {job.location}</span>
                                                <span>• {job.type}</span>
                                                <span>• {job.workMode}</span>
                                            </div>
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
                    </FadeInInitial>
                </div>
            </div>
        </div>
    );
}